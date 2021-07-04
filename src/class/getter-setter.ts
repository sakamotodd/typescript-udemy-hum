export {};

// * owner
//   * 所有者
//   * 初期化時に設定できる。
//   * 途中で変更できない。
//   * 参照できる。
// * member
//   * 個人番号
//   * 初期化時に設定できる。
//   * 途中で変更できる。
//   * 参照できない

class Card {
  private _owner: string;
  private _member: number;
  constructor(owner1: string, member: number) {
    this._owner = owner1;
    this._member = member;
  }
  //private宣言=ownerを参照できる
  get owner() {
    return this._owner;
  }
  //set=変更できる
  set member(member: number) {
    this._member = member;
  }
  print() {
      return `member: ${this._member}`
  }
}

let car = new Card("Dai", 2203);
// car.owner = '大'
// console.log(car.owner);
// console.log(car.print())
// car.member = 53454354;
// console.log(car.print())
// console.log(car.member)

console.log(car.member)

