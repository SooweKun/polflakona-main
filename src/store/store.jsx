import { create } from "zustand";

export const useStore = create((set) => ({
    count: 0,
    countPlus: () => set((state) => ({ count: state.count + 1 })),
}))

export const useStoreCard = create(
    set => ({
        card: [
            
        ],
        addCard: (newCard) => set((state) => ({ card: [...state.card, newCard]})),
    }),
);