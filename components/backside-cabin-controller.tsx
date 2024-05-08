"use client";

import { useCart } from "@/lib/store";
import { Switch } from "./ui/switch";

export const BacksideCabinController = () => {
  const HLBLongRight = useCart.use.HLBLongRight();
  const toggleHLBLongRight = useCart.use.toggleHLBLongRight();
  const HLBShortRight = useCart.use.HLBShortRight();
  const toggleHLBShortRight = useCart.use.toggleHLBShortRight();
  const HLBRedRight = useCart.use.HLBRedRight();
  const toggleHLBRedRight = useCart.use.toggleHLBRedRight();
  const turnSignalBRight = useCart.use.turnSignalBRight();
  const toggleTurnSignalBRight = useCart.use.toggleTurnSignalBRight();

  const HLBLongLeft = useCart.use.HLBLongLeft();
  const toggleHLBLongLeft = useCart.use.toggleHLBLongLeft();
  const HLBShortLeft = useCart.use.HLBShortLeft();
  const toggleHLBShortLeft = useCart.use.toggleHLBShortLeft();
  const HLBRedLeft = useCart.use.HLBRedLeft();
  const toggleHLBRedLeft = useCart.use.toggleHLBRedLeft();
  const turnSignalBLeft = useCart.use.turnSignalBLeft();
  const toggleTurnSignalBLeft = useCart.use.toggleTurnSignalBLeft();
  return (
    <div className="flex flex-col rounded-md">
      <div className="flex divide-x text-sm">
        <div className="grow">
          <div className="flex items-center justify-center border-b px-4 font-semibold text-muted-foreground">
            Правый
          </div>
          <div className="flex flex-col gap-1 p-1">
            <div className="flex justify-between gap-4 px-2">
              Дальний
              <Switch
                checked={HLBLongRight}
                onCheckedChange={toggleHLBLongRight}
              />
            </div>
            <div className="flex justify-between gap-4 px-2">
              Ближний
              <Switch
                checked={HLBShortRight}
                onCheckedChange={toggleHLBShortRight}
              />
            </div>
            <div className="flex justify-between gap-4 px-2">
              Красный
              <Switch
                checked={HLBRedRight}
                onCheckedChange={toggleHLBRedRight}
              />
            </div>
            <div className="flex justify-between gap-4 px-2">
              Поворот
              <Switch
                checked={turnSignalBRight}
                onCheckedChange={toggleTurnSignalBRight}
              />
            </div>
          </div>
        </div>
        <div className="grow">
          <div className="flex items-center justify-center border-b px-4 font-semibold text-muted-foreground">
            Левый
          </div>
          <div className="flex flex-col gap-1 p-1">
            <div className="flex justify-between gap-4 px-2">
              Дальний
              <Switch
                checked={HLBLongLeft}
                onCheckedChange={toggleHLBLongLeft}
              />
            </div>
            <div className="flex justify-between gap-4 px-2">
              Ближний
              <Switch
                checked={HLBShortLeft}
                onCheckedChange={toggleHLBShortLeft}
              />
            </div>
            <div className="flex justify-between gap-4 px-2">
              Красный
              <Switch checked={HLBRedLeft} onCheckedChange={toggleHLBRedLeft} />
            </div>
            <div className="flex justify-between gap-4 px-2">
              Поворот
              <Switch
                checked={turnSignalBLeft}
                onCheckedChange={toggleTurnSignalBLeft}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
