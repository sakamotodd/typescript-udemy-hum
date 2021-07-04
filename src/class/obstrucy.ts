export {};

//抽象メソッド
//宣言のみのメソッド
abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return "rear";
  }
}

class Tiger extends Animal {
    cry() {
        return "gar";
      }
}
