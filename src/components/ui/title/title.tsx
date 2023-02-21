import { FC } from "react";
import clsx from "clsx";
import { TitleProps, TITLE_VIEW } from "./types";
import s from "./title.module.css";

const Title: FC<TitleProps> = ({
  view = TITLE_VIEW.l,
  className,
  children,
}) => {
  return <h3 className={clsx(s.wrapper, s[view], className)}>{children}</h3>;
};

export default Title;
