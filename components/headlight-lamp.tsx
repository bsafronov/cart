import { cn } from "@/lib/utils";

type Props = {
  on?: boolean;
  type: "long" | "short" | "red";
};

export const HeadlightLamp = ({ on, type }: Props) => {
  return (
    <div
      className={cn(
        "relative size-4 rounded-full border bg-background",
        type === "red" && "bg-red-100",
        type === "red" && on && "bg-red-400",
        type !== "red" && on && "bg-yellow-300",
      )}
    />
  );
};
