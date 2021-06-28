export {};

//無名関数
let bmi: (hei: number, wei: number) => number = function (
  hei: number,
  wei: number
): number {
  return wei / (hei * hei);
};

console.log(bmi(1.72, 60));
