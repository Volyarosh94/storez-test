import { Option } from "@/utils/types";

export type UsersState = {
  currentUser?: Option;
  users: Option[];
};

export type UsersStore = UsersState & {
  actions: {
    setUsers: (users: Option[]) => void;
    selectUser: (user: Option) => void;
  };
};
