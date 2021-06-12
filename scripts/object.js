"use strict";

// プロパティとは名前（キー）と値（バリュー）が対になったもの
// プロパティのキーには文字列またはSymbolが利用でき、
// 値には任意のデータを指定できる

const name = "名前";
// `name`というプロパティ名で`name`の変数を値に設定したオブジェクト
const obj = {
    name,
};
console.log(obj); // => { name: "名前" }



// 分割代入
const languages = {
    ja: "日本語",
    en: "英語"
};
const { ja, en } = languages;
console.log(ja); // => "日本語"
console.log(en); // => "英語"



// object[式]というタイプのプロパティの追加の仕方
const key = "key-string";
// Computed Propertyで`key`の評価結果 "key-string" をプロパティ名に利用
const obj2 = {
    [key]: "value"
};
console.log(obj2[key]); // => "value"



// deleteによるプロパティの削除
const obj3 = {
    key1: "value1",
    key2: "value2"
};
// key1プロパティを削除
delete obj3.key1;
// key1プロパティが削除されている
console.log(obj3); // => { "key2": "value2" }



// オブジェクトの変更を防ぐにはObject.freezeメソッドを使う
const fobj = Object.freeze({ key: "value" });
// freezeしたオブジェクトにプロパティを追加や変更できない
// fobj.key = "value"; // => TypeError: "key" is read-only



// プロパティの存在チェックはin演算子かhasOwnPropertyメソッド
const obj5 = { key: undefined };
// `key`プロパティを持っているならtrue
if ("key" in obj5) {
    console.log("`key`プロパティは存在する");
}
