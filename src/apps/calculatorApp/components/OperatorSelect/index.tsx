import styles from "../FormField/index.module.scss";
import { ChangeEventHandler } from "react";

type OperatorSelectProps = {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

export const OperatorSelect = ({
  label,
  value,
  onChange,
}: OperatorSelectProps) => {
  return (
    <label className={styles.inputGroup}>
      <span className={styles.label}>{label}</span>
      <select
        name="selectedOperator"
        className={styles.input}
        value={value}
        onChange={onChange}
      >
        <option value={"+"}>+</option>
        <option value={"-"}>-</option>
        <option value={"x"}>x</option>
        <option value={"÷"}>÷</option>
      </select>
    </label>
  );
};
