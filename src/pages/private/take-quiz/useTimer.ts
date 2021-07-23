import { useEffect, useState } from "react";
import { useLocalStorage } from "../../../hooks";

export const useTimer = (timeInMinutes: number) => {
  const [persistTimer, setPersistTimer] = useLocalStorage<number>(
    "timer",
    timeInMinutes * 60
  );

  const [timer, setTimer] = useState(persistTimer);
  console.log({ persistTimer, timer });

  useEffect(() => {
    setPersistTimer(timer);

    const interval = setTimeout(() => {
      setTimer((currTimer) => (currTimer === 0 ? 0 : currTimer - 1));
    }, 1000);
    return () => {
      clearTimeout(interval);
    };
  }, [timer, setPersistTimer]);

  return { timer };
};
