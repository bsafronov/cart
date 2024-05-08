"use client";

import { useCart } from "@/lib/store";
import { Switch } from "./ui/switch";

export const FrontCabinController = () => {
  const HLFLongRight = useCart.use.HLFLongRight();
  const toggleHLFLongRight = useCart.use.toggleHLFLongRight();
  const HLFShortRight = useCart.use.HLFShortRight();
  const toggleHLFShortRight = useCart.use.toggleHLFShortRight();
  const HLFRedRight = useCart.use.HLFRedRight();
  const toggleHLFRedRight = useCart.use.toggleHLFRedRight();
  const turnSignalFRight = useCart.use.turnSignalFRight();
  const toggleTurnSignalFRight = useCart.use.toggleTurnSignalFRight();

  const HLFLongLeft = useCart.use.HLFLongLeft();
  const toggleHLFLongLeft = useCart.use.toggleHLFLongLeft();
  const HLFShortLeft = useCart.use.HLFShortLeft();
  const toggleHLFShortLeft = useCart.use.toggleHLFShortLeft();
  const HLFRedLeft = useCart.use.HLFRedLeft();
  const toggleHLFRedLeft = useCart.use.toggleHLFRedLeft();
  const turnSignalFLeft = useCart.use.turnSignalFLeft();
  const toggleTurnSignalFLeft = useCart.use.toggleTurnSignalFLeft();

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
                checked={HLFLongRight}
                onCheckedChange={toggleHLFLongRight}
              />
            </div>
            <div className="flex justify-between gap-4 px-2">
              Ближний
              <Switch
                checked={HLFShortRight}
                onCheckedChange={toggleHLFShortRight}
              />
            </div>
            <div className="flex justify-between gap-4 px-2">
              Красный
              <Switch
                checked={HLFRedRight}
                onCheckedChange={toggleHLFRedRight}
              />
            </div>
            <div className="flex justify-between gap-4 px-2">
              Поворот
              <Switch
                checked={turnSignalFRight}
                onCheckedChange={toggleTurnSignalFRight}
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
                checked={HLFLongLeft}
                onCheckedChange={toggleHLFLongLeft}
              />
            </div>
            <div className="flex justify-between gap-4 px-2">
              Ближний
              <Switch
                checked={HLFShortLeft}
                onCheckedChange={toggleHLFShortLeft}
              />
            </div>
            <div className="flex justify-between gap-4 px-2">
              Красный
              <Switch checked={HLFRedLeft} onCheckedChange={toggleHLFRedLeft} />
            </div>
            <div className="flex justify-between gap-4 px-2">
              Поворот
              <Switch
                checked={turnSignalFLeft}
                onCheckedChange={toggleTurnSignalFLeft}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
