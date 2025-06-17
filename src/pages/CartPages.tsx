import { Header } from "../components/Header";
import { useCartCont } from "../hooks/useCartCont";

export const CartPages = () => {
  const { state } = useCartCont();
  return (
    <>
      <Header />
      {state?.productItems.map((el) => {
        return <div>{el.product.name}</div>;
      })}
      <div>{state.totalPrice}</div>
    </>
  );
};
