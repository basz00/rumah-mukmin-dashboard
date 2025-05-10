import { create } from "zustand";

interface HostState {
  hostUrl: string;
  setHostUrl: (url: string) => void;
}

export const useHostState = create<HostState>((set) => ({
  hostUrl: "",
  setHostUrl: (url: string) => set({ hostUrl: url }),
}));
