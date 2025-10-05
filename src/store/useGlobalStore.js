import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  theme: "light",
  setTheme: (theme) => set({ theme }),
}));
