export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "Dai",
  age: 23,
};

me.age++;
console.log(me);

type result = Readonly<Profile>;

const friend: result = {
  name: "Dai",
  age: 23,
};

type Yomitori<T> = {
  readonly [P in keyof T]: T[P];
};

type readonlyRead = Yomitori<Profile>;
