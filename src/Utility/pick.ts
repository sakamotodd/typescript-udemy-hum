export {};

/**
 * 必要なものを取り出す
 * Extractと同義？
 * 除外して必要なものだけ取り出す
 */

type Profile = {
  name: string;
  height: number;
  weight: number;
};

type pickResult = Pick<Profile,'name' | 'weight'>
type omitResult = Omit<Profile, 'height'>