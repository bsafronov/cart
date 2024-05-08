import { Scale } from "./scale";

export const VoltageHigh = () => {
  return (
    <Scale
      title="Напряжение высоков. сети"
      value={80.3}
      unit="В"
      maxValue={200}
      step={50}
    />
  );
};
