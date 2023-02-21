import { ObjValues } from "@/utils/types";
import { PropsWithChildren } from "react";

export const TEXT_VIEW = {
  xl: "xl",
  l: "l",
  m: "m",
  s: "s",
  xs: "xs",
  xxs: "xxs",
} as const;

export type TextView = ObjValues<typeof TEXT_VIEW>;

export type TextProps = PropsWithChildren<{
  className?: string;
  view?: TextView;
  isBold?: boolean;
}>;
