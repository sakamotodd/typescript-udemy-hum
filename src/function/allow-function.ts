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

//省略した書き方
//アクセシビリティ(public, protected, private)の修飾子

const all = (age: number): number => {
  return age
}

console.log(all(23))