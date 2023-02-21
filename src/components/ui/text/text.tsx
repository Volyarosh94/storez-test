import { FC } from "react";
import clsx from "clsx";
import { TextProps, TEXT_VIEW } from "./types";
import s from "./text.module.css";

const Text: FC<TextProps> = ({
  children,
  className,
  view = TEXT_VIEW.m,
  isBold,
}) => {
  return (
    <p
      className={clsx(s.wrapper, s[view], className, {
        [s.bold]: isBold,
      })}
    >
      {children}{" "}
    </p>
  );
};

export default Text;
