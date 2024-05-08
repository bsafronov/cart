import { create } from "zustand";
import { createSelectors } from "./zustand";
import { transmissionOptions } from "./consts";

type Props = {
  speed: number;
  setSpeed: (speed: number) => void;
  transmission: (typeof transmissionOptions)[number];
  setTransmission: (transmission: (typeof transmissionOptions)[number]) => void;
  consumptionLeft: number;
  setConsumptionLeft: (consumption: number) => void;
  consumptionRight: number;
  setConsumptionRight: (consumption: number) => void;
  brakeLeft: number;
  setBrakeLeft: (brake: number) => void;
  brakeRight: number;
  setBrakeRight: (brake: number) => void;
  voltageHigh: number;
  setVoltageHigh: (voltage: number) => void;
  voltageLow: number;
  setVoltageLow: (voltage: number) => void;

  HLFLongRight: boolean;
  HLFLongLeft: boolean;
  HLFShortRight: boolean;
  HLFShortLeft: boolean;
  HLFRedRight: boolean;
  HLFRedLeft: boolean;
  turnSignalFLeft: boolean;
  turnSignalFRight: boolean;
  HLBLongRight: boolean;
  HLBLongLeft: boolean;
  HLBShortRight: boolean;
  HLBShortLeft: boolean;
  HLBRedRight: boolean;
  HLBRedLeft: boolean;
  turnSignalBLeft: boolean;
  turnSignalBRight: boolean;
  toggleHLFLongRight: () => void;
  toggleHLFLongLeft: () => void;
  toggleHLFShortRight: () => void;
  toggleHLFShortLeft: () => void;
  toggleHLFRedRight: () => void;
  toggleHLFRedLeft: () => void;
  toggleTurnSignalFLeft: () => void;
  toggleTurnSignalFRight: () => void;
  toggleHLBLongRight: () => void;
  toggleHLBLongLeft: () => void;
  toggleHLBShortRight: () => void;
  toggleHLBShortLeft: () => void;
  toggleHLBRedRight: () => void;
  toggleHLBRedLeft: () => void;
  toggleTurnSignalBLeft: () => void;
  toggleTurnSignalBRight: () => void;
};

const useStore = create<Props>()((set, get) => ({
  speed: 0,
  transmission: "T1",
  consumptionLeft: 0,
  consumptionRight: 0,
  brakeLeft: 0,
  brakeRight: 0,
  voltageHigh: 0,
  voltageLow: 0,
  HLFLongLeft: false,
  HLFLongRight: false,
  HLFShortLeft: false,
  HLFShortRight: false,
  HLFRedLeft: false,
  HLFRedRight: false,
  HLBLongLeft: false,
  HLBLongRight: false,
  HLBShortLeft: false,
  HLBShortRight: false,
  HLBRedLeft: false,
  HLBRedRight: false,
  turnSignalFLeft: false,
  turnSignalFRight: false,
  turnSignalBLeft: false,
  turnSignalBRight: false,
  setSpeed: (speed) => set({ speed }),
  setTransmission: (transmission) => set({ transmission }),
  setConsumptionLeft: (consumption) => set({ consumptionLeft: consumption }),
  setConsumptionRight: (consumption) => set({ consumptionRight: consumption }),
  setBrakeLeft: (brake) => set({ brakeLeft: brake }),
  setBrakeRight: (brake) => set({ brakeRight: brake }),
  setVoltageHigh: (voltage) => set({ voltageHigh: voltage }),
  setVoltageLow: (voltage) => set({ voltageLow: voltage }),
  toggleHLFLongLeft: () => set({ HLFLongLeft: !get().HLFLongLeft }),
  toggleHLFLongRight: () => set({ HLFLongRight: !get().HLFLongRight }),
  toggleHLFShortLeft: () => set({ HLFShortLeft: !get().HLFShortLeft }),
  toggleHLFShortRight: () => set({ HLFShortRight: !get().HLFShortRight }),
  toggleHLFRedLeft: () => set({ HLFRedLeft: !get().HLFRedLeft }),
  toggleHLBLongLeft: () => set({ HLBLongLeft: !get().HLBLongLeft }),
  toggleHLBLongRight: () => set({ HLBLongRight: !get().HLBLongRight }),
  toggleHLBShortLeft: () => set({ HLBShortLeft: !get().HLBShortLeft }),
  toggleHLBShortRight: () => set({ HLBShortRight: !get().HLBShortRight }),
  toggleHLBRedLeft: () => set({ HLBRedLeft: !get().HLBRedLeft }),
  toggleHLBRedRight: () => set({ HLBRedRight: !get().HLBRedRight }),
  toggleHLFRedRight: () => set({ HLFRedRight: !get().HLFRedRight }),
  toggleTurnSignalBLeft: () => set({ turnSignalBLeft: !get().turnSignalBLeft }),
  toggleTurnSignalBRight: () =>
    set({ turnSignalBRight: !get().turnSignalBRight }),
  toggleTurnSignalFLeft: () => set({ turnSignalFLeft: !get().turnSignalFLeft }),
  toggleTurnSignalFRight: () =>
    set({ turnSignalFRight: !get().turnSignalFRight }),
}));

export const useCart = createSelectors(useStore);
