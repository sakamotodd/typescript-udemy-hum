export {};

/**
 * A | B | Cの形に展開する必要がある。
 */
type MyExclude<T> = T extends string | number ? never : T;

type Void = () => void;
type Union1 = string | number | Void;

//除外 Exclude
//voidのみ
type Exclude1 = Exclude<Union1, string | number>;
type Exclude2 = MyExclude<Union1>;

//型　抽出
type Fun = Extract<Union1, string | number>;
type Fa = Extract<Union1, Function>;

//型 => Functionの役割
type result = NonNullable<Union1>;
