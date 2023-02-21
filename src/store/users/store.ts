import { create } from "zustand";
import { UsersStore } from "./types";

const useUsersStore = create<UsersStore>((set, get) => {
  return {
    currentUser: undefined,
    users: [],
    actions: {
      selectUser: (user) => {
        set({ currentUser: user });
      },
      setUsers: (users) => {
        set({ users });
      },
    },
  };
});

export default useUsersStore;
