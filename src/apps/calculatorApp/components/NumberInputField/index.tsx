import styles from "../FormField/index.module.scss";
import { ChangeEventHandler } from "react";

// コンポーネント抽出。型から書いてみるか

type NumberInputFieldProps = {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const NumberInputField = ({
  label,
  value,
  onChange,
}: NumberInputFieldProps) => {
  return (
    <label className={styles.inputGroup}>
      <span className={styles.label}>{label}</span>
      <input
        type="number"
        className={styles.input}
        placeholder={"数値を入力してくれ"}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
