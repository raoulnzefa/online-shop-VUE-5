
export const fixNumbers = number => {
  number = parseFloat(number);
  return number.toFixed(0);
}