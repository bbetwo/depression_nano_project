import { createContext, useReducer } from "react";
import type { ProductItemType } from "../types";

type StateItem = {
  product: ProductItemType;
  quantity: number;
};

type ReducerState = {
  productItems: StateItem[];
  totalPrice: number;
};

type ACTIONTYPE = { type: "ADD_ITEM"; payload: ProductItemType };

type ContextType = {
  state: ReducerState;
  dispatch: React.Dispatch<ACTIONTYPE>;
};

export const CartContext = createContext<ContextType | undefined>(undefined);

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
      const newTotal = state.totalPrice + action.payload.price;

      if (itemIndex >= 0) {
        newArr[itemIndex] = {
          ...newArr[itemIndex],
          quantity: newArr[itemIndex].quantity + 1,
        };
      } else {
        newArr.push({ product: action.payload, quantity: 1 });
      }
      return { ...state, productItems: newArr, totalPrice: newTotal };
      //   return {
      //     ...state,
      //     productItems: [
      //       ...state.productItems,
      //       { product: { ...action.payload }, quantity: 1 },
      //     ],
      //     totalPrice:
      //       state.totalPrice !== null ? state.totalPrice + action.payload.price  : state.totalPrice,
      //   };
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
