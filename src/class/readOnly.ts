export {};

//コンストラクタの省略で、publicをはずすことができるが、非推奨
class Card {
  constructor(public readonly owner: string) {}
}

let car = new Card("Dai");
console.log(car.owner);
