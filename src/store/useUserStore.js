import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


export const useUserStore = create(

  persist(
    (set) => ({
      user: {
        name: '',
        email: '',
        password: '',
        id: '',
      },

      setUser: (newUser) => set({ user: newUser })
    }), {
    name: 'user',
    storage: createJSONStorage(() => localStorage),
  }
  )
)