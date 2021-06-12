// 配列の分割代入
const array = ["one", "two", "three"];
const [first, second, third] = array;
console.log(first);  // => "one"
console.log(second); // => "two"
console.log(third);  // => "three"



// findIndexメソッド
// colorプロパティを持つオブジェクトの配列
const colors = [
    { "color": "red" },
    { "color": "green" },
    { "color": "blue" }
];
// `color`プロパティが"blue"のオブジェクトのインデックスを取得
const indexOfBlue = colors.findIndex((obj) => {
    return obj.color === "blue";
});
console.log(indexOfBlue); // => 2
console.log(colors[indexOfBlue]); // => { "color": "blue" }

// findメソッド
// `color`プロパティが"blue"のオブジェクトを取得
const blueColor = colors.find((obj) => {
    return obj.color === "blue";
});
console.log(blueColor); // => { "color": "blue" }
// 該当する要素がない場合は`undefined`を返す
const whiteColor = colors.find((obj) => {
    return obj.color === "white";
});
console.log(whiteColor); // => undefined

// includesメソッド（someメソッドも検討する）
const array2 = ["Java", "JavaScript", "Ruby"];
// `includes`は含まれているなら`true`を返す
if (array2.includes("JavaScript")) {
    console.log("配列にJavaScriptが含まれている");
}



// Spread構文による配列の展開
const array3 = ["A", "B", "C"];
const newArray = ["X", ...array3, "Z"];
console.log(newArray); // => ["X", "A", "B", "C", "Z"]



// 高階関数はfilter, map, reduce, forEachを覚えておく

// メソッドチェーンの例
// ECMAScriptのバージョン名と発行年
const ECMAScriptVersions = [
    { name: "ECMAScript 1", year: 1997 },
    { name: "ECMAScript 2", year: 1998 },
    { name: "ECMAScript 3", year: 1999 },
    { name: "ECMAScript 5", year: 2009 },
    { name: "ECMAScript 5.1", year: 2011 },
    { name: "ECMAScript 2015", year: 2015 },
    { name: "ECMAScript 2016", year: 2016 },
    { name: "ECMAScript 2017", year: 2017 },
];
// メソッドチェーンで必要な加工処理を並べている
const versionNames = ECMAScriptVersions
    // 2000年以下のデータに絞り込み
    .filter(ECMAScript => ECMAScript.year <= 2000)
    // それぞれの要素から`name`プロパティを取り出す
    .map(ECMAScript => ECMAScript.name);
console.log(versionNames); // => ["ECMAScript 1", "ECMAScript 2", "ECMAScript 3"]
