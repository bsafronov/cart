import { Scale } from "./scale";

export const BrakeRight = () => {
  return (
    <Scale
      title="Тормоз правый"
      value={3.0}
      unit="атм"
      maxValue={12}
      step={2}
    />
  );
};
