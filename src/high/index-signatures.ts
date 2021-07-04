export {};
/**
 * オブジェクトのkeyをナノテーションするため
 * {[index: typeForIndex]: typeForValue}
 */

interface Profile {
  under: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { under: false };
profile.name = "Dai";
profile.age = 43;
profile.national = "Japan";
