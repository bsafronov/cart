"use client";

import { transmissionOptions } from "@/lib/consts";
import { useCart } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Management = () => {
  const transmission = useCart.use.transmission();
  const setTransmission = useCart.use.setTransmission();

  return (
    <div className="rounded-md border bg-background">
      <h5 className="border-b px-4 py-2 font-semibold">Управление</h5>
      <div className="flex flex-col p-1 text-sm">
        {transmissionOptions.map((option) => (
          <button
            key={option}
            onClick={() => setTransmission(option)}
            className={cn(
              "rounded-md px-1 py-0.5 text-center",
              transmission === option && "bg-muted font-semibold",
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
