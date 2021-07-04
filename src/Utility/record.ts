export {};

/**
 * Record<K, T>
 * union型 => 第一引数
 * object型 => 第二引数
 */

type Profile = "Tokyo" | "Kanagawa" | "Nagano"  ;

//共通のデータ型
type Japan = {
  name: string;
  num: number;
};

const JapanProperty: Record<Profile, Japan> = {
  Tokyo: { name: "東京", num: 3423 },
  Kanagawa: { name: "神奈川", num: 343 },
  Nagano: { name: "長野", num: 1223 },
  

