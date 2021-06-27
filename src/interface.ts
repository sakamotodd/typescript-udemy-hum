export {};

//interfaceでもエイリアスと同様に名前をつけれる
interface ObjectInterface {
  name: string;
  age: number;
}
let object: ObjectInterface = {
  name: "Dai",
  age: 23,
};
