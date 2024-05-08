import { Scale } from "./scale";

export const ConsumptionRight = () => {
  return (
    <Scale
      title="Ток потребления прав. МУМР"
      value={30}
      unit="А"
      maxValue={30}
      step={5}
    />
  );
};
