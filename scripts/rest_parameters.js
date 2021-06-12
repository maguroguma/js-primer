function fn(...args) {
    // argsは引数の値が順番に入った配列
    console.log(args); // => ["a", "b", "c"]
}
fn("a", "b", "c");



function fn(x, y, z) {
    console.log(x); // => 1
    console.log(y); // => 2
    console.log(z); // => 3
}
const array = [1, 2, 3];
// Spread構文で配列を引数に展開して関数を呼び出す
fn(...array);
// 次のように書いたのと同じ意味
fn(array[0], array[1], array[2]);



function fn() {
    // `arguments`はインデックスを指定して各要素にアクセスできる
    console.log(arguments[0]); // => "a"
    console.log(arguments[1]); // => "b"
    console.log(arguments[2]); // => "c"
}
fn("a", "b", "c");
