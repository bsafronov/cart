import { Scale } from "./scale";

export const ConsumptionLeft = () => {
  return (
    <Scale
      title="Ток потребления лев. МУМР"
      value={0}
      unit="А"
      maxValue={30}
      step={5}
    />
  );
};
