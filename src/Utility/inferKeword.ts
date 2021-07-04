export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(2, 4));
type returnTypeResult = ReturnType<typeof add>;

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

/**
 * 関数の型として、制約がある
 * infer
 * T => 型変数
 * 
 */