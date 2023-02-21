import { FC, useCallback } from "react";
import useCurrentStoreStore from "@/store/current-store/store";
import Text from "@/components/ui/text";
import Button from "@/components/ui/button";
import FileInput from "@/components/ui/file-input";
import FileItem from "@/components/ui/file-item";
import s from "./account.module.css";
import cameraSrc from "./../../../../public/camera.svg";
import editSrc from "./../../../../public/edit.svg";
import themeSrc from "./../../../../public/theme-switch.svg";

const Account: FC = () => {
  const { nickname, products, actions: storeActions } = useCurrentStoreStore();

  const onFileUpload = useCallback((file: File) => {
    storeActions.uploadFile(file);
  }, []);

  return (
    <section className={s.wrapper}>
      <div className={s.top}>
        <div className={s.info}>
          <button className={s.photo}>
            <img src={cameraSrc} alt="Edit image" />
          </button>

          <div className={s.name}>
            <Text view="l">@{nickname}</Text>

            <button className={s.edit}>
              <img src={editSrc} alt="Edit name" />
            </button>
          </div>
        </div>

        <div className={s.actions}>
          <Button view="secondary">
            <Text view="l">Edit profile</Text>
          </Button>

          <Button view="secondary">
            <img src={themeSrc} alt="Change theme" />
          </Button>
        </div>
      </div>

      <div className={s.products}>
        <div className={s.container}>
          <FileInput onFileUpload={onFileUpload} />

          <div className={s.files}>
            {new Array(2).fill("").map((_, index) => {
              return <FileItem file={products[index]} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
