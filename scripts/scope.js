const array = [1, 2, 3, 4, 5];
// ループごとに新しいブロックスコープを作成する
for (const element of array) {
    // forのブロックスコープの中でのみ`element`を参照できる
    console.log(element);
}
// ループの外からはブロックスコープ内の変数は参照できない
// console.log(element); // => ReferenceError: element is not defined



// スコープチェーン
{
    // OUTERブロックスコープ
    const x = "outer";
    {
        // INNERブロックスコープ
        const x = "inner";
        // 現在のスコープ(INNERブロックスコープ)にある`x`を参照する
        console.log(x); // => "inner"
    }
    // 現在のスコープ(OUTERブロックスコープ)にある`x`を参照する
    console.log(x); // => "outer"
}



// varがksな理由
// varによる変数宣言は、宣言部分が暗黙的にもっとも近い関数または
// グローバルスコープの戦闘に巻き上げられ、代入部分はそのままの
// 位置に残るという特殊な動作をする。
//
// var宣言より前に参照してもエラーにならない
console.log(x); // => undefined
var x = "varのx";

// 関数「宣言」も巻き上げがある（が、問題になることはほとんどない）
// `hello`関数の宣言より前に呼び出せる
console.log(hello()); // => "Hello"

function hello(){
    return "Hello";
}



// 静的スコープ（※thisは動的スコープ？）
const y = 10; // ＊1

function printY() {
    // この識別子`x`は常に ＊1 の変数`x`を参照する
    console.log(y); // => 10
}

function run() {
    const y = 20; // ＊2
    printY(); // 常に10が出力される
}
run();



// 高階関数とクロージャの組合せ
// 条件を後から定義できるなどの柔軟性が持たせられる
function greaterThan(n) {
    return function(m) {
        return m > n;
    };
}
// 5より大きな値かを判定する関数を作成する
const greaterThan5 = greaterThan(5);
console.log(greaterThan5(4)); // => false
console.log(greaterThan5(5)); // => false
console.log(greaterThan5(6)); // => true
