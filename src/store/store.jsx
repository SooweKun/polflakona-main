import { create } from "zustand";

export const useStore = create((set) =>({
    count: 0,
    countPlus: () => set((state) => ({count: state.count + 1})),
    fill: "none",
    setFill: () => set((state) => ({fill: state.fill === "none" ? "#603699" : "none"}))
}))