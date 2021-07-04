export {};
/**
 * Partial生成
 * ユニオン型 => string | number
 * in keyof => mapped Type
 * プロジェクトの
 *
 */
 type Optional<T> = {
    [P in keyof T]?: T[P] | null};

type Profile = {
  name: string;
  age: number;
};


type PartialProfile = Partial<Profile>;
type PropertyType = keyof Profile;

type re = Optional<Profile>