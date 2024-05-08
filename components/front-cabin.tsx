"use client";

import { useCart } from "@/lib/store";
import { Headlight } from "./headlight";

export const FrontCabin = () => {
  const HLFLongRight = useCart.use.HLFLongRight();
  const HLFShortRight = useCart.use.HLFShortRight();
  const HLFRedRight = useCart.use.HLFRedRight();
  const turnSignalFRight = useCart.use.turnSignalFRight();
  const HLFLongLeft = useCart.use.HLFLongLeft();
  const HLFShortLeft = useCart.use.HLFShortLeft();
  const HLFRedLeft = useCart.use.HLFRedLeft();
  const turnSignalFLeft = useCart.use.turnSignalFLeft();

  return (
    <div className="flex flex-col justify-end gap-4 rounded-t-md bg-background p-4">
      <h5 className="text-center text-muted-foreground">Вид спереди</h5>
      <div className="flex justify-between gap-4">
        <Headlight
          side="right"
          turnSignalOn={turnSignalFRight}
          longOn={HLFLongRight}
          redOn={HLFRedRight}
          shortOn={HLFShortRight}
        />
        <Headlight
          side="left"
          longOn={HLFLongLeft}
          redOn={HLFRedLeft}
          shortOn={HLFShortLeft}
          turnSignalOn={turnSignalFLeft}
        />
      </div>
    </div>
  );
};
