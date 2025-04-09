import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UsernameState {
    username: string;
    setUsername: (username: string) => void;
}

export const useUsername = create<UsernameState>()(
    persist(
        (set) => ({
            username: "",
            setUsername: (username) => set({ username }),
        }),
        {
            name: "username-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
