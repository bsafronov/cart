"use client";

import { useCart } from "@/lib/store";
import { Scale } from "./scale";

export const VoltageHigh = () => {
  const voltageHigh = useCart.use.voltageHigh();

  return (
    <Scale
      title="Напряжение высоков. сети"
      value={voltageHigh}
      unit="В"
      maxValue={200}
      step={50}
    />
  );
};
