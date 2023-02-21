import { FC, useMemo } from "react";
import useCurrentStoreStore from "@/store/current-store/store";
import { copyToClipboard } from "@/utils/functions";
import Text from "../text";
import s from "./store-link.module.css";
import copyImage from "./../../../../public/copy.svg";

const StoreLink: FC = () => {
  const { nickname } = useCurrentStoreStore();

  const linkValue = useMemo(() => {
    return `storez.me/${nickname}`;
  }, []);

  const onCopyClick = async () => {
    await copyToClipboard(linkValue);

    alert("Store name copied");
  };

  return (
    <div className={s.wrapper}>
      <div className={s.link}>
        <Text view="m">Store link:</Text>

        <Text view="m" className={s.value}>
          {linkValue}
        </Text>
      </div>

      <button className={s.copy} onClick={onCopyClick}>
        <img className={s.icon} src={copyImage} alt="copy" />

        <Text view="m">Copy</Text>
      </button>
    </div>
  );
};

export default StoreLink;
