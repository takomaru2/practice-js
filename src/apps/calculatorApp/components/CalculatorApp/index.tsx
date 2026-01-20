import styles from "./index.module.scss";
import { useState } from "react";
import { NumberInputField } from "../NumberInputField";
import { OperatorSelect } from "../OperatorSelect";
import { Button } from "../Button";

export const CalculatorApp = () => {
  // todo: stateの数や型見直す
  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");
  const [operator, setOperator] = useState<string>("+");
  const [result, setResult] = useState<number | null>(null);
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // todo: 見直しの結果こいつらは必要なのか考える
  const plus = (a: number, b: number): number => {
    return a + b;
  };
  const minus = (a: number, b: number): number => {
    return a - b;
  };
  const multiply = (a: number, b: number): number => {
    return a * b;
  };
  const divided = (a: number, b: number): number => {
    return a / b;
  };

  // todo: calc関数なのに他のことも受け持ちすぎている。関数の粒度見直したい
  const calc = () => {
    // 入力欄１と入力欄２のどちらか入力されていない場合
    if (firstValue === "" || secondValue === "") {
      setErrorMessage("有効な数値を入力してください");
      return setShowError(true);
    } else {
      setErrorMessage("");
      setShowError(false);
    }

    if (operator === "÷" && secondValue === "0") {
      setErrorMessage("0で割ることはできません");
      return setShowError(true);
    }

    const firstNumber = Number(firstValue);
    const secondNumber = Number(secondValue);

    switch (operator) {
      case "+":
        setResult(plus(firstNumber, secondNumber));
        break;
      case "-":
        setResult(minus(firstNumber, secondNumber));
        break;
      case "x":
        setResult(multiply(firstNumber, secondNumber));
        break;
      case "÷":
        setResult(divided(firstNumber, secondNumber));
        break;
    }
    setShow(true);
  };

  // todo: よくわからんけどあんま良くなさそう！どうしよ!
  const reset = () => {
    setResult(null);
    setFirstValue("");
    setSecondValue("");
    setOperator("+");
    setShow(false);
    setShowError(false);
    setErrorMessage("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.pageTitle}>計算フォーム</h1>
        <NumberInputField
          label={"数値１"}
          value={firstValue}
          onChange={(event) => setFirstValue(event.target.value)}
        />

        <OperatorSelect
          label={"演算子"}
          value={operator}
          onChange={(event) => setOperator(event.target.value)}
        />

        <NumberInputField
          label={"数値2"}
          value={secondValue}
          onChange={(event) => setSecondValue(event.target.value)}
        />

        <div className={styles.buttonGroup}>
          <Button onClick={calc} label={"計算する"} variant={"primary"} />
          <Button onClick={reset} label={"リセッツ"} variant={"secondary"} />
        </div>

        {show && (
          <div className={styles.resultGroup}>
            <div className={styles.resultLabel}>結果</div>
            <div className={styles.resultValue}>{result}</div>
          </div>
        )}
        {showError && <div className={styles.error}>{errorMessage}</div>}
      </div>
    </div>
  );
};
