export {};

//引数として渡される
function bmi(hei: number, wei:number) :number{
  return wei / (hei * wei);
}

console.log(bmi(171, 62));
