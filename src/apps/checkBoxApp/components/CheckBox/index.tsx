import { ChangeEventHandler } from "react";

type CheckBoxProps = {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const CheckBox = ({ checked, onChange }: CheckBoxProps) => {
  return <input type="checkbox" checked={checked} onChange={onChange} />;
};
