import { FC } from "react";

type ButtonGroupProps = {
  ButtonComponent: FC<any>; //todo: 設計を見直す必要があるぞ型が最悪だぜ密結合しているんだぜ
  count: number;
  setCount: (count: number) => void;
};
// eslint-disable-next-line no-unused-vars
export const ButtonGroup = ({
  ButtonComponent,
  count,
  setCount,
}: ButtonGroupProps) => {
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div>
      {numbers.map((num) => (
        <ButtonComponent
          key={num}
          num={num}
          count={count}
          setCount={setCount}
        />
      ))}
    </div>
  );
};
