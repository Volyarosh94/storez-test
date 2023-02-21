import { FC, useCallback, useEffect } from "react";
import { OnChangeValue } from "react-select";
import { Option } from "@/utils/types";
import useUsersStore from "@/store/users/store";
import { mockUsers } from "@/utils/constants";
import Select, { isMultiType } from "../select";
import s from "./user-select.module.css";

const UserSelect: FC = () => {
  const { users, currentUser, actions: userActions } = useUsersStore();

  const onUserSelect = useCallback(
    (value: OnChangeValue<Option, isMultiType>) => {
      userActions.selectUser(value as Option);
    },
    []
  );

  useEffect(() => {
    userActions.setUsers(mockUsers);
  }, []);

  return (
    <div className={s.wrapper}>
      <Select
        instanceId="user"
        defaultValue={currentUser}
        onChange={onUserSelect}
        options={users}
      />
    </div>
  );
};

export default UserSelect;
