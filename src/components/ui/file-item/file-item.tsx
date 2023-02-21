import { FC } from "react";
import { FileItemProps } from "./types";
import Text from "../text";
import s from "./file-item.module.css";
import plusSrc from "./../../../../public/plus.svg";

const FileItem: FC<FileItemProps> = ({ file }) => {
  return (
    <div className={s.wrapper}>
      <button className={s.button}>
        {file ? (
          <div className={s.uploaded}>
            <Text className={s.text} view="m">
              {file.name}
            </Text>
          </div>
        ) : (
          <div className={s.empty}>
            <img src={plusSrc} alt="Plus" />
          </div>
        )}
      </button>

      <div className={s.info}>
        <Text className={s.name}>{file ? file.name : "Product name"}</Text>

        <Text>{file ? file.type.split("/")[1].toUpperCase() : "-"}</Text>
      </div>
    </div>
  );
};

export default FileItem;
