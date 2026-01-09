import { Dispatch, SetStateAction } from "react";

type ButtonGroupProps = {
  ButtonComponent: any;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
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
