"use client";

import { useCart } from "@/lib/store";
import { Scale } from "./scale";

export const VoltageLow = () => {
  const voltageLow = useCart.use.voltageLow();

  return (
    <Scale
      title="Напряжение низков. сети"
      value={voltageLow}
      unit="В"
      maxValue={2000}
      step={500}
    />
  );
};
