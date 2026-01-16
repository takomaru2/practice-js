import styles from "./index.module.scss";
import { useState } from "react";

export const CalculatorApp = () => {
  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");
  const [operator, setOperator] = useState<string>("+");
  const [result, setResult] = useState<number | null>(null);
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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

  //もし初期値がnumberだったらplusはfirstValue + secondValueなだけか

  // todo: calc関数作る。stateをnumber に変換する。演算子が何かを見て渡す関数を選ぶ
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
    if (operator === "+") {
      setResult(plus(firstNumber, secondNumber));
    } else if (operator === "-") {
      setResult(minus(firstNumber, secondNumber));
    } else if (operator === "x") {
      setResult(multiply(firstNumber, secondNumber));
    } else if (operator === "÷") {
      setResult(divided(firstNumber, secondNumber));
    }
    setShow(true);
  };

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
        <label className={styles.inputGroup}>
          <span className={styles.label}>数値１</span>
          <input
            type="number"
            className={styles.input}
            placeholder={"数値を入力してくれ"}
            value={firstValue}
            onChange={(event) => setFirstValue(event.target.value)}
          />
        </label>
        <label className={styles.inputGroup}>
          <span className={styles.label}>演算子</span>
          <select
            name="selectedOperator"
            className={styles.input}
            value={operator}
            onChange={(event) => setOperator(event.target.value)}
          >
            <option value={"+"}>+</option>
            <option value={"-"}>-</option>
            <option value={"x"}>x</option>
            <option value={"÷"}>÷</option>
          </select>
        </label>
        <label className={styles.inputGroup}>
          <span className={styles.label}>数値2</span>
          <input
            type="number"
            className={styles.input}
            placeholder={"数値を入力してくれ"}
            value={secondValue}
            onChange={(event) => setSecondValue(event.target.value)}
          />
        </label>
        <div className={styles.buttonGroup}>
          <button className={styles.submitButton} onClick={calc}>
            計算する
          </button>
          <button
            type={"button"}
            className={styles.resetButton}
            onClick={reset}
          >
            リセッツ
          </button>
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
