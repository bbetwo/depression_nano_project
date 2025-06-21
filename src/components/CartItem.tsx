import { useCartAction } from "../hooks/useCartAction";
import type { ProductItemType } from "../types";
import { Button } from "./Button";

type CartItemType = {
  item: ProductItemType;
};

export const CartItem = ({ item }: CartItemType) => {
  const { plusItem, minusItem, removItems } = useCartAction();
  console.log(plusItem, "DSFS");

  return (
    <div>
      <div>{item.name}</div>
      <span>{item.price}</span>
      <Button onClick={() => plusItem(item.id)}>+</Button>
      <Button onClick={() => minusItem(item.id)}>-</Button>
      <Button onClick={() => removItems(item.id)}>Del</Button>
    </div>
  );
};
