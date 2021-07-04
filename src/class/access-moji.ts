export {};

//参照できなくするためにアクセス修飾子がある。 => private
//class内であれば、参照できる =>関数profileは呼び出される

class Person {
  public name: string;
  private age: number;
  protected national: string;

  constructor(name: string, age: number, national: string) {
    this.name = name;
    this.age = age;
    this.national = national;
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

//superを使うことによって、親クラスのコンストラクタを呼び出せる
//protectedを使うことによって子クラスで呼び出すことができる
//privateは呼び出すことができない
class Android extends Person {
  constructor(name: string, age: number, national: string) {
    super(name, age, national);
  }
  profile(): string {
    return `name: ${this.name} national: ${this.national}`;
  }
}

let taro = new Person("Dai", 23, "japan");
console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age);