import { Button } from "../Button/index.jsx";

export const MinusButton = ({ count, setCount, num }) => {
  const handleClickMinus = () => {
    setCount(count - num);
  };

  return <Button num={num} handleClick={handleClickMinus} operator={"-"} />;
};
