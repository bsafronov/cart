import { cn } from "@/lib/utils";

const DIVISION = 10;
const speedPoints = Array.from({ length: 11 }).map((_, i) => i * DIVISION);

export const Speedometer = () => {
  return (
    <div>
      <div className="flex size-64 justify-center overflow-hidden rounded-full border bg-background">
        <div className="relative h-32 w-full">
          {speedPoints.map((speed, i) => (
            <div
              key={speed}
              className="absolute bottom-0 left-1/2 size-2 h-28 w-1 origin-bottom"
              style={{
                rotate: `${-90 + (i * 180) / (speedPoints.length - 1)}deg`,
              }}
            >
              <span className="absolute h-4 w-[1px] -translate-y-5 bg-border"></span>
              <span
                className={cn(
                  "absolute -translate-x-1/2 text-xs text-muted-foreground",
                  speed > 60 && "text-amber-500",
                  speed > 80 && "text-rose-500",
                )}
              >
                {speed}
              </span>
            </div>
          ))}
          <Needle speed={40} />
          <div className="absolute bottom-0 left-1/2 flex h-10 w-40 -translate-x-1/2 translate-y-20 items-center justify-center text-3xl font-semibold text-muted-foreground">
            40 км/ч
          </div>
        </div>
      </div>
    </div>
  );
};

const Needle = ({ speed }: { speed: number }) => {
  return (
    <div
      className="absolute bottom-0 left-1/2 origin-bottom -translate-x-1/2 translate-y-3 rounded-full border-x-[0.4rem] border-b-[6.5rem] border-t-0 border-slate-300 border-x-transparent"
      style={{
        rotate: `${-90 + speed * (180 / (speedPoints.length - 1) / DIVISION)}deg`,
      }}
    ></div>
  );
};
