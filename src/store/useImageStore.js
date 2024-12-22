import { create } from "zustand";

export const useImageStore = create((set) => ({
    images: [],
    setImages: (newImages) => set({ images: newImages }),
}));