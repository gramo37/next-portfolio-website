import {create} from "zustand";

type AppState = {
  user: any;
  setUserInfo: (queryKeys: any) => void;
};

const useGetUserStore = create<AppState>((set) => ({
  user: {},
  setUserInfo: (user: any) => set((state) => ({ user })),
}));

export default useGetUserStore;
