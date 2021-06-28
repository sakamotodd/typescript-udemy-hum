export {};

//アロー関数
//宣言されているbmi,引数、戻り値にアノテーションをつける
let bmi: (wei: number, hei: number) => number = (
  wei: number,
  hei: number
): number => {
  return wei / (hei * hei);
};

console.log(bmi(1.71, 62));
