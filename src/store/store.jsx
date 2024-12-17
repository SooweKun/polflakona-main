import { create } from "zustand";

export const useStore = create((set) => ({
    count: 0,
    countPlus: () => set((state) => ({ count: state.count + 1 })),
    fill: "none",
    setFill: () => set((state) => ({ fill: state.fill === "none" ? "#603699" : "none" })),
    data: {
        id: (1),
        price: (""),
        img: (""),
        title: (""),
        name: ("")
    },
    setData: () => set((state) => (
        { data: state.data }
    ))
}))

export const useStoreCard = create(
    set => ({
        card: [
            {
                id: 0,
                price: '',
                img: '',
                title: '',
                name: '',
            },
        ],
        addCard(data) {
            set(() => ({ card: data }));
        },
    }),
);