export {};

//literal => 文字列の指定ができる
let day: "日" | "月" = "日";
day = "月";

// コンパイルエラー => 指定してないため
// day = "21";

let month: 1 | 2 | 3 | 4 = 1;
month = 2;
// month = 21;

let TRUE: true = true;
// TRUE = false;
