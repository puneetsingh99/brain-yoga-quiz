import { formatTimer } from "../utils/formatTimer";
import { useLocalStorage } from "../../../../hooks";
import { useState, useEffect } from "react";

export const Timer = ({ timelimit }: { timelimit: number }) => {
  const [persistTimer, setPersistTimer] = useLocalStorage<number>(
    "timer",
    timelimit * 60
  );

  const [timer, setTimer] = useState(persistTimer);

  useEffect(() => {
    setPersistTimer(timer);
    const interval = setTimeout(() => {
      setTimer((currTimer) => {
        return currTimer === 0 ? 0 : currTimer - 1;
      });
    }, 1000);

    return () => {
      localStorage.removeItem("timer");
      clearTimeout(interval);
    };
  }, [timer, setPersistTimer]);

  return <p>{formatTimer(timer)}</p>;
};
