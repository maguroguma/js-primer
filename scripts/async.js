// Async Functionは通常の関数とは異なり、
// 必ずPromiseインスタンスを返す関数を定義する構文
// 「async function = 非同期関数」と自然に読める
async function doAsync() {
    return "値";
}
// doAsync関数はPromiseを返す
doAsync().then(value => {
    console.log(value); // => "値"
});



// 関数宣言のAsync Function版
async function fn1() {}
// 関数式のAsync Function版
const fn2 = async function() {};
// Arrow FunctionのAsync Function版
const fn3 = async() => {};
// メソッドの短縮記法のAsync Function版
const obj = { async method() {} };



// 1. Async Functionが値をreturnした場合、その返り値を持つFulfilledなPromiseを返す
// 2. Async FunctionがPromiseをreturnした場合、その返り値のPromiseをそのまま返す
// 3. Async Function内で例外が発生した場合は、そのエラーを持つRejectedなPromiseを返す
