"use client";

import { useCart } from "@/lib/store";
import { Headlight } from "./headlight";

export const BacksideCabin = () => {
  const HLBLongRight = useCart.use.HLBLongRight();
  const HLBShortRight = useCart.use.HLBShortRight();
  const HLBRedRight = useCart.use.HLBRedRight();
  const turnSignalBRight = useCart.use.turnSignalBRight();
  const HLBLongLeft = useCart.use.HLBLongLeft();
  const HLBShortLeft = useCart.use.HLBShortLeft();
  const HLBRedLeft = useCart.use.HLBRedLeft();
  const turnSignalBLeft = useCart.use.turnSignalBLeft();

  return (
    <div className="flex flex-col justify-end gap-4 rounded-t-md bg-background p-4">
      <h5 className="text-center text-muted-foreground">Вид сзади</h5>
      <div className="flex justify-between gap-4">
        <Headlight
          side="right"
          turnSignalOn={turnSignalBRight}
          longOn={HLBLongRight}
          redOn={HLBRedRight}
          shortOn={HLBShortRight}
        />
        <Headlight
          side="left"
          longOn={HLBLongLeft}
          redOn={HLBRedLeft}
          shortOn={HLBShortLeft}
          turnSignalOn={turnSignalBLeft}
        />
      </div>
    </div>
  );
};
