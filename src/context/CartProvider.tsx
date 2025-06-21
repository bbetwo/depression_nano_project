import { useReducer } from "react";
import type { ProductItemType } from "../types";
import { CartContext } from "./CartContext";

type StateItem = {
  product: ProductItemType;
  quantity: number;
};

type ReducerState = {
  productItems: StateItem[];
  totalPrice: number;
};

type ACTIONTYPE =
  | { type: "ADD_ITEM"; payload: ProductItemType }
  | {
      type: "REMOVE_ITEM";
      payload: { id: number };
    }
  | { type: "PLUS_ITEM"; payload: { id: number } }
  | { type: "MINUS_ITEM"; payload: { id: number } };

export type ContextType = {
  state: ReducerState;
  dispatch: React.Dispatch<ACTIONTYPE>;
};

const initialState: ReducerState = {
  productItems: [],
  totalPrice: 0,
};

const cartReducer = (state: ReducerState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const newArr = [...state.productItems];

      const itemIndex = newArr.findIndex(
        (el) => el.product.id === action.payload.id
      );
      const newTotal = Number(
        (state.totalPrice + action.payload.price).toFixed(2)
      );

      if (itemIndex >= 0) {
        newArr[itemIndex] = {
          ...newArr[itemIndex],
          quantity: newArr[itemIndex].quantity + 1,
        };
      } else {
        newArr.push({ product: action.payload, quantity: 1 });
      }

      return { ...state, productItems: newArr, totalPrice: newTotal };
    }

    case "REMOVE_ITEM": {
      const newArr = state.productItems.filter(
        (el) => el.product.id !== action.payload.id
      );

      const currEl = state.productItems.find(
        (el) => el.product.id === action.payload.id
      );

      const newTotal =
        currEl !== undefined
          ? Number(
              (
                state.totalPrice -
                currEl?.product.price * currEl?.quantity
              ).toFixed(2)
            )
          : state.totalPrice;

      return {
        ...state,
        productItems: newArr,
        totalPrice: newTotal,
      };
    }

    case "PLUS_ITEM": {
      const newArr = state.productItems.map((el) =>
        el.product.id === action.payload.id
          ? { ...el, quantity: el.quantity + 1 }
          : el
      );

      const itemIndex = state.productItems.find(
        (el) => el.product.id === action.payload.id
      );

      if (!itemIndex || itemIndex?.quantity >= 10) return state;

      const newTotal = Number(
        (state.totalPrice + itemIndex.product.price).toFixed(2)
      );

      return {
        ...state,
        productItems: newArr,
        totalPrice: newTotal,
      };
    }

    case "MINUS_ITEM": {
      const findEl = state.productItems.find(
        (el) => el.product.id === action.payload.id
      );

      if (!findEl) return state;

      const newArr =
        findEl?.quantity === 1
          ? [...state.productItems].filter(
              (el) => el.product.id !== action.payload.id
            )
          : [...state.productItems].map((el) =>
              el.product.id === action.payload.id
                ? { ...el, quantity: el.quantity - 1 }
                : el
            );

      const newTotal = Number(
        (state.totalPrice - findEl.product.price).toFixed(2)
      );

      return { ...state, productItems: newArr, totalPrice: newTotal };
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
