export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(2, 4));
type returnTypeResult = ReturnType<typeof add>;
