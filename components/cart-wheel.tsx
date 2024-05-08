import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const CartWheel = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "absolute bottom-0 left-1/2 size-14 translate-y-1/2 rounded-full border bg-background ",
        className,
      )}
    >
      <div className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border"></div>
    </div>
  );
};
