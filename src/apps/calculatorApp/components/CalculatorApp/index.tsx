import styles from "./index.module.scss";
import { useState } from "react";
import { NumberInputField } from "../NumberInputField";
import { OperatorSelect } from "../OperatorSelect";
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

export const CalculatorApp = () => {
  // todo: stateの数や型見直す
  // why:firstValueがstring型なの?eventの型に合わせている設計
  //上４つは確実に要りそうなstate
  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");
  const [operator, setOperator] = useState<Operator>("+");
  const [result, setResult] = useState<number | null>(null);

  // const [showResult, setShowResult] = useState(false); //消せれるかも
  // const [showError, setShowError] = useState(false); //消せれるかも
  const [errorMessage, setErrorMessage] = useState("");

  /*表示を担うstateを他のstateから導き出せるのではないか？

   * 例えばshowResultをresultから導き出す。
   * result!==nullならば画面を表示。booleanに評価されるので
   *
   * 例えばshowErrorをerrorMessageから導き出す。
   * errorMessage!==""ならば画面を表示。booleanに評価されるので
   * */

  const showResult = result !== null;
  const showError = errorMessage !== "";

  // todo: calc関数なのに他のことも受け持ちすぎている。関数の粒度見直したいというかonClickに渡すのはこいつしかいないから関数名を変更してrefactorしたい
  const handleClickCalcButton = () => {
    // 入力欄１と入力欄２のどちらか入力されていない場合
    if (firstValue === "" || secondValue === "") {
      setErrorMessage("有効な数値を入力してください");
      return;
    }

    if (operator === "÷" && secondValue === "0") {
      setErrorMessage("0で割ることはできません");
      return;
    }

    const calcResult = calc(Number(firstValue), Number(secondValue), operator);

    setResult(calcResult);
  };

  // todo: よくわからんけどあんま良くなさそう！どうしよ!
  const reset = () => {
    setResult(null);
    setFirstValue("");
    setSecondValue("");
    setOperator("+");
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
          onChange={(event) => setOperator(event.target.value as Operator)}
        />

        <NumberInputField
          label={"数値2"}
          value={secondValue}
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

        {showResult && (
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
