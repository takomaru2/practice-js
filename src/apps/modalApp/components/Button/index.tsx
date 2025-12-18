import styles from "./index.module.scss";
import { MouseEventHandler } from "react";

// propsはオブジェクトの形だからこれでええねん
// これは直接引数に型をつけているのでは無く、先に型を定義してからつけようという作戦
//speakerは辿っていけばstringなことはわかる
type ButtonProps = {
  speaker: string;
  onClick: MouseEventHandler<HTMLButtonElement>; //1個の型;
};
//さて問題はonClickだ。onClickには関数が渡されているが、関数型ーで済む話なのか
//

export const Button = ({ speaker, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {speaker}
    </button>
  );
};
