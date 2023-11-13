import { create } from "zustand";

type AppState = {
  menu: string;
  setMenu: (menu: string) => void;
};

const useGetMenuStore = create<AppState>((set) => ({
  menu: "userinfo",
  setMenu: (menu: string) => set((state) => ({ menu })),
}));

export default useGetMenuStore;
