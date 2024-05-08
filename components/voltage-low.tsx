import { Scale } from "./scale";

export const VoltageLow = () => {
  return (
    <Scale
      title="Напряжение низков. сети"
      value={897.0}
      unit="В"
      maxValue={2000}
      step={500}
    />
  );
};
