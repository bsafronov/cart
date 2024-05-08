import { CartWheel } from "./cart-wheel";

export const CartCabin = () => {
  return (
    <div className="relative flex items-end">
      <div className="relative h-20 w-40 rounded-md border bg-background">
        <CartWheel />
      </div>
      <div className="-ml-8 mb-2 h-4 w-32 rounded-md border bg-background"></div>
      <div className="absolute bottom-0 right-0 z-10 h-6 w-3 -translate-y-1/4 translate-x-1/2 rounded-sm border bg-background" />
    </div>
  );
};
