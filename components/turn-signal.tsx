import { cn } from "@/lib/utils";

type Props = {
  side: "left" | "right";
  on?: boolean;
  children?: React.ReactNode;
};

export const TurnSignal = ({ side, on, children }: Props) => {
  return (
    <div
      className={cn(
        "bg-amber-50",

        side === "left" && "rounded-r-md pr-2",
        side === "right" && "rounded-l-md pl-2",
        on && "bg-amber-400",
      )}
    >
      {children}
    </div>
  );
};
