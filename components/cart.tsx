import { CartWheel } from "./cart-wheel";

export const Cart = () => {
  return (
    <div className="relative mb-2 h-4 w-48 rounded-md border bg-background">
      <CartWheel className="-bottom-2" />
      <div className="absolute right-0 top-0 z-10 h-6 w-3 -translate-y-1/4 translate-x-1/2 rounded-sm border bg-background" />
    </div>
  );
};
