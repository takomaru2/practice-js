import styles from "./index.module.scss";
import { ChangeEventHandler } from "react";

type SelectFieldProps = {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: { value: string; label: string }[];
  name: string;
};

export const SelectField = ({
  label,
  value,
  onChange,
  options,
  name,
}: SelectFieldProps) => {
  return (
    <label className={styles.selectField}>
      <span className={styles.label}>{label}</span>
      <select
        name={name}
        className={styles.select}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>
    </label>
  );
};
