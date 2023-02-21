import { create } from "zustand";
import { CurrentStoreStore } from "./types";

const useCurrentStoreStore = create<CurrentStoreStore>((set, get) => {
  return {
    id: "1",
    name: "Store name",
    nickname: "mystore",
    products: [],
    actions: {
      uploadFile: (file) => {
        set({ products: [...new Set(get().products.concat(file))] });
      },
      changeNickname: (newName) => {
        set({ nickname: newName });
      },
    },
  };
});

export default useCurrentStoreStore;
