export {};

//シミュレーチャー
function double(values: number): number;
function double(values: string): string;

//オーバーロードとは、同じ名前の関数に対して戻り値が違い複数あること
//アノーテーションにany型を記載
//関数の実態の法では型制約を行わない => 型の制約はシミュレーチャーの役割
//分岐で戻り値を分ける
function double(values: any): any {
  console.log(typeof values);
  if (typeof values === "number") {
    return values * 2;
  } else {
    return values + values;
  }
}
console.log(double("Go"));
console.log(double(100));
