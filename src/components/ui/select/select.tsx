import { memo, useCallback } from "react";
import ReactSelect, {
  ActionMeta,
  MultiValue,
  OnChangeValue,
  SingleValue,
} from "react-select";
import clsx from "clsx";
import { Option } from "@/utils/types";
import s from "./Select.module.css";

export type isMultiType = true | false;

export type SelectProps = {
  instanceId: string;
  options: Option[];
  value?: SingleValue<Option> | MultiValue<Option>;
  additionalClasses?: string;
  onChange?: (
    value: OnChangeValue<Option, isMultiType>,
    action: ActionMeta<Option>
  ) => void;
  [x: string]: unknown;
};

const Select: React.FC<SelectProps> = ({
  instanceId,
  options,
  value,
  onChange,
  additionalClasses = "",
  ...rest
}) => {
  const closeMenuHandler = useCallback(() => {
    const $listBox = document.querySelector(
      `#react-select-${instanceId}-listbox`
    );
    const $select = $listBox?.parentElement;
    const $clonedListBox = $listBox?.cloneNode(true) as HTMLElement;

    if (!$clonedListBox) {
      return;
    }

    $clonedListBox.classList.add("menu-close");
    $clonedListBox.addEventListener("animationend", () => {
      $select?.removeChild($clonedListBox);
    });

    $select?.appendChild($clonedListBox);
  }, [instanceId]);

  return (
    <div className={clsx(s.wrapper, additionalClasses)}>
      <ReactSelect
        className={clsx(s.select)}
        classNamePrefix="select"
        instanceId={instanceId}
        options={options}
        defaultValue={options[0]}
        value={value}
        onChange={onChange}
        onMenuClose={closeMenuHandler}
        isSearchable={false}
        {...rest}
      />
    </div>
  );
};

export default memo(Select);
