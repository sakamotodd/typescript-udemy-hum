export {};

//クラスの拡張
//Person > Lion 
// super.関数 =>　呼び出せる。
class Person {
  constructor(public name: string) {}
  run(): string {
    return `super runddd`;
  }
}

class Lion extends Person {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
      
    return `${this.name} is ${this.speed}km ${super.run()}`;
  }
}

// let ai = new Person();
// console.log(ai.run());
// let lion = new Lion();
// console.log(lion.run());

console.log(new Lion("aya", 80).run());

