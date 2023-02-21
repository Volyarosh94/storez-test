import { ObjValues } from "@/utils/types";
import { PropsWithChildren } from "react";

export const TITLE_VIEW = {
  l: "l",
} as const;

export type TitleView = ObjValues<typeof TITLE_VIEW>;

export type TitleProps = PropsWithChildren<{
  className?: string;
  view?: TitleView;
}>;
