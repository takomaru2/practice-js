/*
型を共通部分に持ってきたことにより、親に依存せず再利用性が高くなった。
ざっくり言うと前の状態だと"CheckBoxApp"がないと他のアプリでhooksが使えない！
* */

export type Item = {
  id: number;
  task: string;
  time: string;
};
