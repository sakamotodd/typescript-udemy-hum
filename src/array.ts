export {};

let numbers: number[] = [1, 2, 3];
console.log(numbers);

let name: string[] = ["Typescript", "Javascript", "node"];
console.log(name);
let strings: number[][] = [
  [40, 50],
  [3, 5],
];

console.log(strings);

let ja: (
  | {
      a: string;
      b: string;
    }
  | {
      c: string;
      d: string;
    }
)[] = [
  { a: "asd", b: "eff" },
  { c: "gva", d: "des" },
];

console.log(ja)
