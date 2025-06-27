import styled from "styled-components";
import type { ProductItemType } from "../types";
import { Button } from "./Button";
import { useCartCont } from "../hooks/useCartContext";
import { useCallback } from "react";

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 33.33%;
  align-items: center;
  gap: 5px;
  padding: 10px;
  border-radius: 10px;
  background-color: rgb(92 0 159 / 35%);
  &:hover {
    background-color: rgb(19 0 34 / 35%);
  }
`;

type Props = {
  item: ProductItemType;

  // onClic: (obj: ProductItemType) => void;
};

export const ProductItem = ({ item }: Props) => {
  const { name, description, price } = item;
  const { dispatch } = useCartCont();

  const handleClickAdd = useCallback(() => {
    dispatch({ type: "ADD_ITEM", payload: item });
  }, [dispatch, item]);

  return (
    <>
      <ProductWrapper>
        <h2>{name}</h2>
        <p>{description}</p>
        <span>price: {price}</span>
        <Button onClick={handleClickAdd}>Add Cart</Button>
      </ProductWrapper>
    </>
  );
};
