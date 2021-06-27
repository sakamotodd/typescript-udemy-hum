export {};

const ex = (): number => 43;

let numAny: any = ex();
let numUnknown: unknown = ex();

// Unknownがtypeofによって'number'型ということがわかる
// if文によって、number型が安全に実行される。
let subAny = numAny + 10;
 console.log(typeof numUnknown)
if (typeof numUnknown === "number") {
  let subUnknown = numUnknown + 10;
}
