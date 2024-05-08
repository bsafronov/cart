import { Cart } from "./cart";
import { CartCabin } from "./cart-cabin";

export const CartComposition = () => {
  return (
    <div className="flex items-end">
      <CartCabin />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
    </div>
  );
};
