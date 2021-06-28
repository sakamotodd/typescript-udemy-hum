export {};

const reducer: (ace: number, beta: number) => number = (
  ace: number,
  beta: number
) => {
  console.log({ ace, beta });
  return ace + beta;
};

// ...のrestパラメーターの場合、配列を返す。
const sum: (...values: number[]) => number = (...values: number[]): number => {
  values.reduce(reducer);
  return 100;
};

console.log(sum(1, 2, 3, 4, 5));
