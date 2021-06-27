export {};

//ユニオンタイプの制約だと、逆転した時にコンパイルエラーを発生させるようにする。
let profile: [string, number] = ['Daigoro', 23];
console.log(profile)

