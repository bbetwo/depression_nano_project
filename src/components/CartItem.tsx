import { useCartAction } from "../hooks/useCartAction";
import type { ProductItemType } from "../types";
import { Button } from "./Button";

type CartItemType = {
  items: {
    product: ProductItemType;
    quantity: number;
  };
};

export const CartItem = ({ items }: CartItemType) => {
  const { product, quantity } = items;

  const { plusItem, minusItem, removItems } = useCartAction();

  return (
    <div>
      <div>{product.name}</div>
      <span>{product.price}</span>
      <span>{quantity}</span>
      <Button onClick={() => plusItem(product.id)}>+</Button>
      <Button onClick={() => minusItem(product.id)}>-</Button>
      <Button onClick={() => removItems(product.id)}>Del</Button>
    </div>
  );
};
