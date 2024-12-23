import { create } from "zustand";

export const useStoreCard = create(
    set => ({
        card: [],
        addCard: (newCard) => set((state) => {
            const updatedCards = state.card.reduce((acc, card) => {
                if (card.id === newCard.id) {
                    acc.push({ ...card, count: card.count + 1 });
                } else {
                    acc.push(card);
                }
                return acc;
            }, []);
            const cardpov = updatedCards.some(card => card.id === newCard.id);

            if (!cardpov) {
                updatedCards.push({ ...newCard, count: 1 });
            }
            return { card: updatedCards };
        }),
        deleteCard: (id) => set((state) => ({ card: state.card.filter(card => card.id !== id) })),
        countPlus: (id) => set((state) => ({
            card: state.card.map(card =>
                card.id === id ? { ...card, count: card.count + 1 } : card
            ),
        })),
        countMinus: (id) => set((state) => ({
            card: state.card.map(card =>
                card.id === id ? { ...card, count: card.count - 1 } : card
            ),
        })),
    }),
);

export const useUserStore = create(
    set => ({
        user: {
            id: 0,
            login: '',
            password: '',
            role: '',
            number: '',
            name: '',
        },
        addUser(data) {
            set(() => ({ user: data }));
        },
    }),
);

export const useDataStore = create(
    set => ({
        data: [],
        addData: (newItem) => set(() => ({ data: [newItem] })),
    })
)