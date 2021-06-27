export {};

type P1 = {
  num: number;
};

type B1 = {
  str: number;
};

const strong: P1 = {
  num: 154,
};
const big: B1 = {
  str: 0.367,
};

//intersection型は&で連携できる
type inter = P1 & B1;
const result: inter = {
    num: 165,
    str: 0.300,
}
