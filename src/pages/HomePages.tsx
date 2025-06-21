import styled from "styled-components";
import { Header } from "../components/Header";
import { ProductItem } from "../components/ProducItem";
import { useEffect, useState } from "react";
import { productMock } from "../utils/mock";
import type { ProductItemType } from "../types";
import { useCartCont } from "../hooks/useCartContext";

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
  justify-content: center;
`;

export const HomePages = () => {
  const [productItems, setProductItems] = useState<ProductItemType[]>([]);
  const { state } = useCartCont();
  console.log(state.productItems, "asdasdasd");

  useEffect(() => {
    const data = productMock(10);
    setProductItems(data);
  }, []);

  return (
    <>
      <Header />
      <ProductList>
        {productItems.map((el) => {
          return <ProductItem key={el.id} item={el} />;
        })}
      </ProductList>

      <div>PRIVETIK DEBIL</div>
    </>
  );
};
