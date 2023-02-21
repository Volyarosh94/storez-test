import { FC } from "react";
import Title from "@/components/ui/title";
import UserSelect from "@/components/ui/user-select";
import StoreLink from "@/components/ui/store-link";
import s from "./header.module.css";

const Header: FC = () => {
  return (
    <header className={s.wrapper}>
      <section className={s.left}>
        <Title view="l">Editor</Title>

        <UserSelect />
      </section>

      <section className={s.right}>
        <StoreLink />
      </section>
    </header>
  );
};

export default Header;
