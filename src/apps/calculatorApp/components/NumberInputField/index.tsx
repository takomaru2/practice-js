import styles from "../FormField/index.module.scss";
import { ChangeEventHandler } from "react";

type NumberInputFieldProps = {
  label: string;
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const NumberInputField = ({
  label,
  value,
  onChange,
  placeholder,
}: NumberInputFieldProps) => {
  return (
    <label className={styles.inputGroup}>
      <span className={styles.label}>{label}</span>
      <input
        type="number"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
