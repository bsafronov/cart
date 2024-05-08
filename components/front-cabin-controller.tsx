import { Switch } from "./ui/switch";

export const FrontCabinController = () => {
  return (
    <div className="flex flex-col rounded-md">
      <div className="flex divide-x text-sm">
        <div className="grow">
          <div className="flex items-center justify-center border-b px-4 font-semibold text-muted-foreground">
            Правый
          </div>
          <div className="flex flex-col gap-1 p-1">
            <div className="flex justify-between gap-4 px-2">
              Дальний
              <Switch />
            </div>
            <div className="flex justify-between gap-4 px-2">
              Ближний
              <Switch />
            </div>
            <div className="flex justify-between gap-4 px-2">
              Красный
              <Switch />
            </div>
            <div className="flex justify-between gap-4 px-2">
              Поворот
              <Switch />
            </div>
          </div>
        </div>
        <div className="grow">
          <div className="flex items-center justify-center border-b px-4 font-semibold text-muted-foreground">
            Левый
          </div>
          <div className="flex flex-col gap-1 p-1">
            <div className="flex justify-between gap-4 px-2">
              Дальний
              <Switch />
            </div>
            <div className="flex justify-between gap-4 px-2">
              Ближний
              <Switch />
            </div>
            <div className="flex justify-between gap-4 px-2">
              Красный
              <Switch />
            </div>
            <div className="flex justify-between gap-4 px-2">
              Поворот
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
