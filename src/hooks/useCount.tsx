import { useEffect, useState } from "react";

type CounterProps = {
  value: number;
  increment: () => void;
  decrement: () => void;
};

const useCount = (): CounterProps => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("Value changed:", count);
  }, []);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return { value: count, increment, decrement };
};

export default useCount;
