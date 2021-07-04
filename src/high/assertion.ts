export {};

/**
 * 型アサーション => 制約を与える
 * オーバーライドは、親クラスで定義したメソッドを継承した子クラスで同じメソッドを定義し処理を変えることができる
 * 右辺に型定義したい時に使うのがアサーション
 */

let name: any = "Dai";
let length = (name as string).length;
length = "foo";
