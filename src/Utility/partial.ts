export {};
/**
 * partial
 * オプショナルプロパティ => プロパティの末尾に?をつけること
 * 関数のコピーの役割
 *
 */

type Profile = {
  name: string;
  age?: number
};

type PartialType = Partial<Profile>
type RequiredType = Required<Profile>

