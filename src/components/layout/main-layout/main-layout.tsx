import { FC, PropsWithChildren } from "react";
import Header from "../header";
import s from "./main-layout.module.css";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={s.wrapper}>
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;
