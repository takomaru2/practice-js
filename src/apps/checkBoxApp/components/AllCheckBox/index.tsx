import { ChangeEventHandler, Ref } from "react";

type AllCheckBoxProps = {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  ref: Ref<HTMLInputElement>;
};

export const AllCheckBox = ({ ref, checked, onChange }: AllCheckBoxProps) => {
  return (
    <input type="checkbox" checked={checked} onChange={onChange} ref={ref} />
  );
};
