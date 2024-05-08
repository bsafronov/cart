"use client";

import { useCart } from "@/lib/store";
import { Scale } from "./scale";

export const BrakeLeft = () => {
  const brakeLeft = useCart.use.brakeLeft();

  return (
    <Scale
      title="Тормоз левый"
      value={brakeLeft}
      unit="атм"
      maxValue={20}
      step={5}
    />
  );
};
