import { cn } from "@/lib/utils";

type Props = {
  side: "left" | "right";
  redOn?: boolean;
  shortOn?: boolean;
  turnSignalOn?: boolean;
  longOn?: boolean;
};

export const Headlight = ({
  side,
  longOn,
  redOn,
  shortOn,
  turnSignalOn,
}: Props) => {
  return (
    <div
      className={cn(
        "flex overflow-hidden rounded-md border",
        side === "left" && "flex-row-reverse",
      )}
    >
      <div className="flex w-3 flex-col divide-y">
        <div
          className={cn(
            "-ml-2 grow",
            side === "right" && "-mr-2",
            side === "left" && "-ml-2",
            turnSignalOn && "bg-amber-400",
          )}
        />
        <div
          className={cn(
            "grow",
            side === "right" && "-mr-2",
            side === "left" && "-ml-2",
            redOn && "bg-red-500",
          )}
        />
      </div>
      <div
        className={cn(
          "relative z-10 flex items-center justify-center gap-1 rounded-md bg-muted p-1",
          side === "left" && "flex-row-reverse border-r",
          side === "right" && "border-l",
        )}
      >
        <div
          className={cn(
            "size-4 rounded-md border bg-background",
            longOn && "bg-yellow-200",
          )}
        />
        <div
          className={cn(
            "size-4 rounded-md border bg-background",
            shortOn && "bg-yellow-200",
          )}
        />
      </div>
    </div>
  );
};
