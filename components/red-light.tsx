import { cn } from "@/lib/utils";

type Props = {
  on?: boolean;
};

export const RedLight = ({ on }: Props) => {
  return (
    <div
      className={cn(
        "relative size-4 rounded-full border bg-red-200",
        on && "bg-red-500",
      )}
    >
      {on && <div className="absolute -inset-1 bg-red-500 blur-md" />}
    </div>
  );
};
