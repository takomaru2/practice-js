import styles from "./index.module.scss";
import { FC, MouseEventHandler, useState } from "react";
import { NumberInputField } from "../NumberInputField";
import { SelectField } from "../SelectField";
import { Button } from "../Button";

type Operator = "+" | "-" | "x" | "÷";

const calc = (
  firstNumber: number,
  secondNumber: number,
  operator: Operator,
): number => {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "x":
      return firstNumber * secondNumber;
    case "÷":
      return firstNumber / secondNumber;
  }
};
const operatorInitialValue = "+";
export const CalculatorApp: FC = () => {
  // why:firstValueがstring型なの?eventの型に合わせている設計
  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");
  const [operator, setOperator] = useState<Operator>(operatorInitialValue);
  const [result, setResult] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  //派生stateができたぜ
  const hasResult = result !== null;
  const hasError = errorMessage !== "";

  const handleClickCalcButton: MouseEventHandler<HTMLButtonElement> = () => {
    // エラーメッセージ1の表示
    if (firstValue === "" || secondValue === "") {
      setErrorMessage("有効な数値を入力してください");
      setResult(null);
      return;
    }
    // エラーメッセージ2の表示
    if (operator === "÷" && secondValue === "0") {
      setErrorMessage("0で割ることはできません");
      setResult(null);
      return;
    }

    // 計算結果担当
    const calcResult = calc(Number(firstValue), Number(secondValue), operator);
    setResult(calcResult);
  };

  // todo: 初期値にしているがstateの初期値
  // stateを全てを初期値にする担当
  const reset: MouseEventHandler<HTMLButtonElement> = () => {
    setFirstValue("");
    setSecondValue("");
    setOperator(operatorInitialValue);
    setResult(null);
    setErrorMessage("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.pageTitle}>計算フォーム</h1>
        <NumberInputField
          label={"数値１"}
          value={firstValue}
          placeholder={"数値を入力してくれ"}
          onChange={(event) => setFirstValue(event.target.value)}
        />

        <SelectField
          label={"演算子"}
          value={operator}
          name={"selectedOperator"}
          options={[
            { value: "+", label: "足す" },
            { value: "-", label: "引く" },
            { value: "x", label: "かける" },
            { value: "÷", label: "割る" },
          ]}
          onChange={(event) => setOperator(event.target.value as Operator)}
        />

        <NumberInputField
          label={"数値2"}
          value={secondValue}
          placeholder={"数値を入力してくれ"}
          onChange={(event) => setSecondValue(event.target.value)}
        />

        <div className={styles.buttonGroup}>
          <Button
            onClick={handleClickCalcButton}
            label={"計算する"}
            variant={"primary"}
          />
          <Button onClick={reset} label={"リセッツ"} variant={"secondary"} />
        </div>

        {hasResult && (
          <div className={styles.resultGroup}>
            <div className={styles.resultLabel}>結果</div>
            <div className={styles.resultValue}>{result}</div>
          </div>
        )}
        {hasError && <div className={styles.error}>{errorMessage}</div>}
      </div>
    </div>
  );
};
