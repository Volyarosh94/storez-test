import { ChangeEvent, FC, useRef } from "react";
import { FileInputProps } from "./types";
import Text from "../text";
import Button from "../button";
import s from "./file-input.module.css";
import uploadSrc from "./../../../../public/upload.svg";

const FileInput: FC<FileInputProps> = ({ onFileUpload }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];

      onFileUpload(file);
    }
  };

  return (
    <section className={s.wrapper} onClick={() => inputRef.current?.click()}>
      <input
        ref={inputRef}
        onChange={onChange}
        className={s.hidden}
        type="file"
      />

      <img className={s.icon} src={uploadSrc} alt="Upload file" />

      <Text className={s.title} view="m" isBold>
        Add new product
      </Text>

      <Button className={s.button} view="primary">
        <Text className={s.buttonText} view="m" isBold>
          + Upload
        </Text>
      </Button>
    </section>
  );
};

export default FileInput;
