// 配列
const array = [1, 2];
const [a, b] = array;
console.log(a);
console.log(b);

// オブジェクト
// オブジェクトのキーのことを「プロパティ名」と呼ぶ
// プロパティ名と代入先の変数名が一致する必要がある
const obj = {
  "key": "valueだよ",
};
const { key } = obj;
console.log(key);

// 関数の引数
function printUserId({ id }) {
  console.log(id);
}
const user = {
  id: 42,
};
printUserId(user)
