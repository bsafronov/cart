import { Scale } from "./scale";

export const BrakeLeft = () => {
  return (
    <Scale title="Тормоз левый" value={7.1} unit="атм" maxValue={20} step={5} />
  );
};
