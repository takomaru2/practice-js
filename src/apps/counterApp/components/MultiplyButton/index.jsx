import { Button } from "../Button/index.jsx";

export const MultiplyButton = ({ count, setCount, num }) => {
  const handleClickMultiply = () => {
    setCount(count * num);
  };

  return <Button num={num} handleClick={handleClickMultiply} operator={"x"} />;
};
