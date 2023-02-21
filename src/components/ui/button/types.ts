import { ObjValues } from "@/utils/types";
import { ButtonHTMLAttributes } from "react";

export const BUTTON_VIEW = {
  primary: "primary",
  secondary: "secondary",
} as const;

export type ButtonView = ObjValues<typeof BUTTON_VIEW>;

export type ButtonProps = {
  view?: ButtonView;
} & ButtonHTMLAttributes<HTMLButtonElement>;
