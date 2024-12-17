import { create } from "zustand";

export const useStoreCount = create(
    set => ({
        count: 1,
        increment: () => set((state) => ({ count: state.count + 1})),
        decrement: () => set((state) => ({ count: state.count - 1})),
    })
)

export const useStoreCard = create(
    set => ({
        card: [
            
        ],
        addCard: (newCard) => set((state) => ({ card: [...state.card, newCard]})),
        deleteCard: (id) => set((state) => ({ card: state.card.filter(item => item.id !== id)})),
    }),
);