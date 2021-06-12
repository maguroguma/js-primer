// prototypeオブジェクトとは、すべてのオブジェクトの作成時に
// 自動的に追加される特殊なオブジェクト

// Object.create(null)を活用したMapの代用
// 空オブジェクトを作成
const obj = {};
// "toString"という値を定義してないのに、"toString"が存在している
console.log(obj["toString"]);// Function
// Mapのような空オブジェクト
const mapLike = Object.create(null);
// toStringキーは存在しない
console.log(mapLike["toString"]); // => undefined
