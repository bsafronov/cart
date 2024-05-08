"use client";

import { useCart } from "@/lib/store";
import { Scale } from "./scale";

export const ConsumptionRight = () => {
  const consumptionRight = useCart.use.consumptionRight();
  return (
    <Scale
      title="Ток потребления прав. МУМР"
      value={consumptionRight}
      unit="А"
      maxValue={30}
      step={5}
    />
  );
};
