export {};

//?をつけることによって、引数がなくてもコンパイルエラーがでない
let bmi: (hei: number, wei: number, table?: boolean) => number = (
  hei: number,
  wei: number,
  table?: boolean
): number => {
  const bmi: number = wei / (hei * hei);
  if (table) {
    console.log(bmi);
  }
  return bmi
};

bmi(1.71, 60, true);
