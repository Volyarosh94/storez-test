import { FC } from "react";
import MainLayout from "./components/layout/main-layout";
import Account from "./components/layout/account";
import Preview from "./components/layout/preview";
import s from "./App.module.css";

const App: FC = () => {
  return (
    <MainLayout>
      <main className={s.wrapper}>
        <Account />

        <Preview />
      </main>
    </MainLayout>
  );
};

export default App;
