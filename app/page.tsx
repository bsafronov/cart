import { AdminPanel } from "@/components/admin-panel";
import { BacksideCabin } from "@/components/backside-cabin";
import { BacksideCabinController } from "@/components/backside-cabin-controller";
import { BrakeLeft } from "@/components/brake-left";
import { BrakeRight } from "@/components/brake-right";
import { CartComposition } from "@/components/cart-composition";
import { CartState } from "@/components/cart-state";
import { ConsumptionLeft } from "@/components/consumption-left";
import { ConsumptionRight } from "@/components/consumption-right";
import { FrontCabin } from "@/components/front-cabin";
import { FrontCabinController } from "@/components/front-cabin-controller";
import { Management } from "@/components/management";
import { VoltageHigh } from "@/components/voltage-high";
import { VoltageLow } from "@/components/voltage-low";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="border-b p-4 pb-[1.6rem]">
        <CartComposition />
      </div>
      <div className="flex flex-col gap-8 p-4">
        <div className="flex grow items-start gap-4">
          <Management />
          <div className="flex grow flex-col gap-4">
            <ConsumptionRight />
            <ConsumptionLeft />
          </div>
          <div className="flex grow flex-col gap-4">
            <BrakeRight />
            <BrakeLeft />
          </div>
          <div className="flex grow flex-col gap-4">
            <VoltageHigh />
            <VoltageLow />
          </div>
        </div>
        <div className="flex items-baseline gap-4">
          <div className="divide-y rounded-md border">
            <FrontCabin />
            <FrontCabinController />
          </div>
          <div className="divide-y rounded-md border">
            <BacksideCabin />
            <BacksideCabinController />
          </div>
          <CartState />
        </div>
        <AdminPanel />
      </div>
    </div>
  );
}
