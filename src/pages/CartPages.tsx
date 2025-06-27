import { CartItem } from "../components/CartItem";
import { Header } from "../components/Header";
import { useCartCont } from "../hooks/useCartContext";

export const CartPages = () => {
  const { state } = useCartCont();
  return (
    <>
      <Header />
      {state.totalPrice === 0 ? (
        <div>Pusto Bratishka</div>
      ) : (
        state.productItems.map((el) => {
          return (
            <div>
              <CartItem items={el} />
            </div>
          );
        })
      )}
      <div>Общий прайсик: {state.totalPrice} даларей</div>
    </>
  );
};
