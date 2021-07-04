export {};

/**
 * exclude(K,T)
 * 指定した型の除外
 * Extract(K,T)
 * 指定した型の抽出
 */

type Void = () => void;
type Union1 = string | number | Void;

//除外 Exclude
//voidのみ
type Exclude1 = Exclude<Union1, string | number>;
// Function => string | number
type Nun = Exclude<Union1, Function>;

//型　抽出
type Fun = Extract<Union1, string | number>;
type Fa = Extract<Union1, Function>;

//型 => Functionの役割
type result = NonNullable<Union1>;
