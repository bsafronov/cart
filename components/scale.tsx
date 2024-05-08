type Props = {
  title: string;
  value: number;
  unit: "А" | "атм" | "В";
  step: number;
  maxValue: number;
};

export const Scale = ({ maxValue, step, unit, title, value }: Props) => {
  const steps = Array.from({ length: maxValue / step + 1 }, (_, i) => i * step);

  return (
    <div className="flex flex-col gap-2 rounded-md border bg-background px-6 pb-6 pt-4">
      <div className="flex items-center justify-between gap-4">
        <span className="font-semibold">{title}</span>
        <span className="text-lg text-muted-foreground">
          {value} {unit}
        </span>
      </div>
      <div className="relative h-8 border-b border-t">
        <div
          className="absolute bottom-0 top-0 bg-emerald-500/30"
          style={{
            width: `${(value / maxValue) * 100}%`,
          }}
        />
        {steps.map((step) => (
          <div
            key={step}
            className="absolute bottom-0 h-full w-[1px] bg-border"
            style={{ left: `${(step / maxValue) * 100}%` }}
          >
            <span className="absolute bottom-0 inline-block -translate-x-1/2 translate-y-5 text-xs">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
