import { FC } from "react";
import clsx from "clsx";
import { ButtonProps, BUTTON_VIEW } from "./types";
import s from "./button.module.css";

const Button: FC<ButtonProps> = ({
  view = BUTTON_VIEW.primary,
  children,
  className,
  ...props
}) => {
  return (
    <button className={clsx(s.wrapper, s[view], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
