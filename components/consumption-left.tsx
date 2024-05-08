"use client";

import { useCart } from "@/lib/store";
import { Scale } from "./scale";

export const ConsumptionLeft = () => {
  const consumptionLeft = useCart.use.consumptionLeft();

  return (
    <Scale
      title="Ток потребления лев. МУМР"
      value={consumptionLeft}
      unit="А"
      maxValue={30}
      step={5}
    />
  );
};
