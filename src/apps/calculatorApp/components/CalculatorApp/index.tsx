import styles from "./index.module.scss";
import { ChangeEvent, FC, MouseEventHandler, useState } from "react";
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
  const handleChangeFirstNumber = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => setFirstValue(event.target.value);

  const [secondValue, setSecondValue] = useState<string>("");
  const handleChangeSecondNumber = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => setSecondValue(event.target.value);

  const [operator, setOperator] = useState<Operator>(operatorInitialValue);
  const handleChangeOperator = (event: ChangeEvent<HTMLSelectElement>): void =>
    setOperator(event.target.value as Operator);

  const [result, setResult] = useState<number | null>(null);
  const hasResult = result !== null;

  const [errorMessage, setErrorMessage] = useState("");
  const hasError = errorMessage !== "";

  const handleClickCalcButton: MouseEventHandler<HTMLButtonElement> = () => {
    clearResultAndError();

    // エラーメッセージ1の表示
    if (firstValue === "" || secondValue === "") {
      setErrorMessage("有効な数値を入力してください");
      return;
    }

    // エラーメッセージ2の表示
    if (operator === "÷" && secondValue === "0") {
      setErrorMessage("0で割ることはできません");
      return;
    }

    // 計算結果担当
    const calcResult = calc(Number(firstValue), Number(secondValue), operator);
    setResult(calcResult);
  };

  // stateを全てを初期値にする担当
  const reset: MouseEventHandler<HTMLButtonElement> = () => {
    setFirstValue("");
    setSecondValue("");
    setOperator(operatorInitialValue);
    setResult(null);
    setErrorMessage("");
  };

  // 初期化
  const clearResultAndError = () => {
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
          onChange={handleChangeFirstNumber}
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
          onChange={handleChangeOperator}
        />

        <NumberInputField
          label={"数値2"}
          value={secondValue}
          placeholder={"数値を入力してくれ"}
          onChange={handleChangeSecondNumber}
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
