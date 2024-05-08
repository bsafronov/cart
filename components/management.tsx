"use client";

import { transmissionOptions } from "@/lib/consts";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const Management = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="rounded-md border bg-background">
      <h5 className="border-b px-4 py-2 font-semibold">Управление</h5>
      <div className="flex flex-col p-1 text-sm">
        {transmissionOptions.map((option) => (
          <button
            key={option}
            onClick={() => setSelected(option)}
            className={cn(
              "rounded-md px-1 py-0.5 text-center",
              selected === option && "bg-muted font-semibold",
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
