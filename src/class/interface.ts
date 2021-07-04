export {};
/**
 * インターフェース => 複数の抽象メソッド
 * 複数同時にインターフェースを継承できる。
 * 継承は複数のクラスを継承することはできない
 * インターフェースを継承する => implementsを使用する
 * class => 実装を記載
 */


//シグネチャ ↓
interface Kenja {
  ion(): void;
}
interface Sensi {
  ore(): void;
}

class Jiro implements Kenja, Sensi {
  ion(): void {
    console.log("Dai");
  }
  ore(): void {
    console.log("sakamoto");
  }
}

const jiro = new Jiro();
jiro.ion();
jiro.ore();
