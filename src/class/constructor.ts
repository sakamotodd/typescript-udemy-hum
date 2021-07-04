export {};

//コンストラクタ処理は初期化できる
class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person("Dai", 23);
console.log(me);
