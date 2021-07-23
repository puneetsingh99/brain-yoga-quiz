export const formatTimer = (seconds: number): string => {
  let minStr = String(Math.floor(seconds / 60));
  let secStr = String(seconds % 60);

  if (minStr.length === 1) {
    minStr = `0${minStr}`;
  }
  if (secStr.length === 1) {
    secStr = `0${secStr}`;
  }

  return `${minStr} : ${secStr}`;
};
