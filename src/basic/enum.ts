export {};

//enumは連続した値を出力するもの
//1をオーバーライドすることによって、1から始まる
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}
console.log(Months);

enum Colors {
  red = "#FF0000",
  white = "#FFFFFF",
  green = "#008000",
  blue = "0000FF",
  black = "#00000",
}

//後で追加することもできる
enum Colors {
  yellow = "#FFFF00",
}
console.log(Colors);
