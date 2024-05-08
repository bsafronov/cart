"use client";

import { useCart } from "@/lib/store";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export const AdminPanel = () => {
  const consumptionLeft = useCart.use.consumptionLeft();
  const setConsumptionLeft = useCart.use.setConsumptionLeft();
  const consumptionRight = useCart.use.consumptionRight();
  const setConsumptionRight = useCart.use.setConsumptionRight();
  const brakeLeft = useCart.use.brakeLeft();
  const setBrakeLeft = useCart.use.setBrakeLeft();
  const brakeRight = useCart.use.brakeRight();
  const setBrakeRight = useCart.use.setBrakeRight();
  const voltageHigh = useCart.use.voltageHigh();
  const setVoltageHigh = useCart.use.setVoltageHigh();
  const voltageLow = useCart.use.voltageLow();
  const setVoltageLow = useCart.use.setVoltageLow();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Панель управления</Button>
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader>
          <SheetTitle>Панель управления</SheetTitle>
          <SheetDescription>Настройка состояния телеги</SheetDescription>
        </SheetHeader>
        <div className="mt-8 flex flex-col gap-4">
          <Label className="flex flex-col gap-1">
            Ток потребления прав. МУМР
            <Input
              type="number"
              max={30}
              min={0}
              value={consumptionRight}
              onChange={(e) => setConsumptionRight(Number(e.target.value))}
            />
          </Label>
          <Label className="flex flex-col gap-1">
            Ток потребления лев. МУМР
            <Input
              type="number"
              max={30}
              min={0}
              value={consumptionLeft}
              onChange={(e) => setConsumptionLeft(Number(e.target.value))}
            />
          </Label>
          <Label className="flex flex-col gap-1">
            Тормоз правый
            <Input
              type="number"
              max={12}
              min={0}
              value={brakeLeft}
              onChange={(e) => setBrakeLeft(Number(e.target.value))}
            />
          </Label>
          <Label className="flex flex-col gap-1">
            Тормоз левый
            <Input
              type="number"
              max={20}
              min={0}
              value={brakeRight}
              onChange={(e) => setBrakeRight(Number(e.target.value))}
            />
          </Label>
          <Label className="flex flex-col gap-1">
            Напряжение высоков. сети
            <Input
              type="number"
              max={200}
              min={0}
              value={voltageHigh}
              onChange={(e) => setVoltageHigh(Number(e.target.value))}
            />
          </Label>
          <Label className="flex flex-col gap-1">
            Напряжение низков. сети
            <Input
              type="number"
              max={2000}
              min={0}
              value={voltageLow}
              onChange={(e) => setVoltageLow(Number(e.target.value))}
            />
          </Label>
        </div>
      </SheetContent>
    </Sheet>
  );
};
