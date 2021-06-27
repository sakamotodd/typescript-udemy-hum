export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error("test");
  alert(result)
} catch (error) {
  console.log({ error });
}

//void型とnever型の違い
let foo: void = undefined;
let food: never = error('only me!')
