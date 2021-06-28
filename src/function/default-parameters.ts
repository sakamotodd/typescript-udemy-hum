export {};

//アノーテーションの横にデフォルトの引数を追加できる
const salary = (current: number, rate: number = 1.1) => {
  return current * rate;
};

console.log(salary(1000));
