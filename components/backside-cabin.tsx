export const BacksideCabin = () => {
  return (
    <div className="flex flex-col justify-end gap-4 rounded-t-md bg-background p-4">
      <h5 className="text-center text-muted-foreground">Вид сзади</h5>
      <div className="flex justify-between gap-4">
        <div className="flex divide-x rounded-md border">
          <div className="w-2" />
          <div className="flex gap-1 rounded-r-md bg-muted p-1">
            <div className="size-4 rounded-full border bg-red-200" />
            <div className="size-4 rounded-full border bg-background" />
            <div className="size-4 rounded-full border bg-background" />
          </div>
        </div>
        <div className="flex divide-x rounded-md border">
          <div className="flex gap-1 rounded-l-md bg-muted p-1">
            <div className="size-4 rounded-full border bg-background" />
            <div className="size-4 rounded-full border bg-background" />
            <div className="size-4 rounded-full border bg-red-200" />
          </div>
          <div className="w-2" />
        </div>
      </div>
    </div>
  );
};
