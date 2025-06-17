import styled from "styled-components";
import type { ProductItemType } from "../types";

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 33.33%;
  gap: 5px;
  background-color: bisque;
`;

type Props = {
  item: ProductItemType;
  onClic: (obj: ProductItemType) => void;
};

export const ProductItem = ({ item, onClic }: Props) => {
  const { name, description, price } = item;
  return (
    <>
      <ProductWrapper>
        <h2>{name}</h2>
        <p>{description}</p>
        <span>price: {price}</span>
        <button onClick={() => onClic(item)}>Add Cart</button>
      </ProductWrapper>
    </>
  );
};
