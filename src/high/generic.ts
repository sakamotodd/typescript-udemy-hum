export {};
/**
 * 関数の実装が同じで返す型が違う場合、ジェネリック関数を実装
 * ジェネリックの宣言 => 'T'を用いる
 * 出力 => 関数<型>(引数)
 * クラス内で型を統一できる
 */

// const generic = (age: number): number => {
//   return age;
// };

// const generic = (age: string): string => {
//   return age;
// };

const generic = <T>(age: T): T => {
  return age;
};

console.log(generic<number>(100));
console.log(generic<string>("Daigoro"));
console.log(generic<boolean>(true));

class AClass<T> {
  constructor(public num: T) {}
  output(): T {
    return this.num;
  }
}

console.log(new AClass<number>(123).output())
console.log(new AClass<string>('Daigoro').output())