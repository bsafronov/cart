"use client";

import { useCart } from "@/lib/store";
import { Scale } from "./scale";

export const BrakeRight = () => {
  const brakeRight = useCart.use.brakeRight();

  return (
    <Scale
      title="Тормоз правый"
      value={brakeRight}
      unit="атм"
      maxValue={12}
      step={2}
    />
  );
};
