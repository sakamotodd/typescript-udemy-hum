export {};

//エイリアス＝別名をつける、先頭大文字
type Moji = string;
const alias: Moji = "別名";
console.log(alias);

//型の作り方
//直接指定も可能
//エイリスは一度定義した場合、何度でも使用できる

type profile = {
  name: string;
  age: number;
};
const example1: profile = {
  name: "Dai",
  age: 23,
};
console.log(example1);


//推奨方法 => typeofでオブジェクトを定義する
type ProfileResult = typeof example1;
const ex: ProfileResult = {
  name: "aya",
  age: 7,
};

console.log(ex);
