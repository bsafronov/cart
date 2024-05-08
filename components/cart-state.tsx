"use client";

import { useCart } from "@/lib/store";
import { Check } from "lucide-react";

export const CartState = () => {
  const currentSpeed = useCart.use.speed();

  return (
    <div className="rounded-md border bg-background">
      <h5 className="border-b p-4 font-semibold">Состояние телеги</h5>
      <div className="flex flex-col px-4 py-2">
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-muted-foreground">Схема собрана</span>
          <Check className="size-4 text-emerald-500" />
        </div>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-muted-foreground">Температура</span>
          <div className="mr-1 size-2 rounded-full bg-emerald-500" />
        </div>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-muted-foreground">
            Частота вращения прав. колеса, об/мин
          </span>
          <span>213</span>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-muted-foreground">
            Частота вращения лев. колеса, об/мин
          </span>
          <span>213</span>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-muted-foreground">Ток высоковольт. АБ, А</span>
          <span>38</span>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-muted-foreground">Ток низковольт. АБ, А</span>
          <span>56</span>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-muted-foreground">Температура TBUP</span>
          <span>22.0°C</span>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-muted-foreground">Температура TMOT</span>
          <span>21.5°C</span>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-muted-foreground">Скорость</span>
          <span>{currentSpeed} км/ч</span>
        </div>
      </div>
    </div>
  );
};
