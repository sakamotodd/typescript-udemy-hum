export {};
/**
 * 引数 => 関数に渡す値
 * 渡す側 => 実引数 受け取る側 => 仮引数
 * 戻り値 => 関数に主力される値
 * ***********************************************
 * 前提として。互換性がある値は変換できる
 * any型とstring型の変数を用意
 * any型にstringを代入
 * typeofで型が遷移するのを確認する
 * ***********************************************
 * string => number
 * 互換性がないパターンなのでエラー
 * ***********************************************
 * string <= stringリテラル(代入可能)
 * ***********************************************
 * interface class 例
 * オブジェクトの型に関係ない。=> 互換性があるから
 * オブジェクトのメンバー内のメンバーによって決まる
 * 代入されるメンバーに互換性があるか確認する
 * 構造的部分型
 */
let fooAny: any;
let barString: string = "Typescript";

console.log(typeof fooAny);
fooAny = barString;
console.log(typeof fooAny);

let fooStr: string;
let barNum: number;

// fooStr = barNum;
let varStr: string;
fooStr = varStr;

class AClass {
  constructor(public age: number)  {}
}

interface AInterface {
  age: number;
}

let me: AInterface;
me = new AClass(43);
console.log(me)