import ConfettiGenerator from "confetti-js";
import { useEffect, useState } from "react";

export const Confetti = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  useEffect(() => {
    const confettiSettings = {
      target: "confetti-canvas",
      max: 200,
      clock: 50,
      rotate: true,
    };
    const confetti = new ConfettiGenerator(confettiSettings);

    const timer = setTimeout(() => setShowConfetti(false), 5000);

    if (showConfetti) {
      confetti.render();
    }

    return () => {
      clearTimeout(timer);
      confetti.clear();
      setShowConfetti(false);
    };
  }, [showConfetti]);
  return (
    <canvas
      id="confetti-canvas"
      className={`fixed-full-screen ${!showConfetti && `hidden`}`}
    ></canvas>
  );
};
