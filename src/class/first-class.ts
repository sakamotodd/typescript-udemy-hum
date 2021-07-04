export {};

//コンストラクタ => 自動的に取り込まれるメソッド（初期値）
//引数を渡すことができる
//コンストラクタは、returnしないため宣言がいらない。

// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   profile(): string {
//     return `name: ${this.name}, age: ${this.age}`;
//   }
// }
// let taro = new Person("Dai", 23);
// console.log(taro.profile());
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  profile(): string {
    return `name: ${this.name} age: ${this.age}`;
  }
}

//　インスタンスは実態
let taro = new Person("dai", 23);
console.log(taro.profile());
