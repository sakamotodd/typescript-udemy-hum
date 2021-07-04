export {};

//静的メンバーとは、インスタンスの省略ができる => new 'class'省略
//staticをつけることによって、class名とメンバー名の記載でアクセスできる。

class Me {
  static hei: boolean = true;
  static first: string = "sakamoto";
  static last: string = "Dai";

  //関数も同様
  //変数を記載する時にclass名 => thisに変更できる
  static work() {
    return `Hey guy ${this.hei}`;
  }
}

// let me = new Me();
// console.log(me.hei);

console.log(Me.hei);
console.log(Me.work())
