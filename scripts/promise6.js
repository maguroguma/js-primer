// コールバック関数でPromiseインスタンスを返すと、
// 例外的な挙動を示す。
// すなわち、「コールバックが返すPromiseと同じ状態のPromiseインスタンスが
// then/catchメソッドの返り値となる。」
// Promise.resolve().then(function onFulfilledA() {
//     return Promise.reject(new Error("失敗"));
// }).then(function onFulfilledB() {
//     console.log("onFulfilledBは呼び出されません");
// }).catch(function onRejected(error) {
//     console.log(error.message); // => "失敗"
// }).then(function onFulfilledC() {
//     console.log("onFulfilledCは呼び出されます");
// });

// この仕組みによって、
// catchしてもそのままRejectedな状態を継続できる。
function main() {
    return Promise.reject(new Error("エラー"));
}
// mainはRejectedなPromiseを返す
main().catch(error => {
    // asyncFunctionで発生したエラーのログを出力する
    console.log(error);
    // Promiseチェーンはそのままエラーを継続させる
    return Promise.reject(error);
}).then(() => {
    // 前のcatchでRejectedなPromiseが返されたため、この行は実行されません
    console.log("catchの後は普通Fulfilledだけど、これは実行されない");
}).catch(error => {
    console.log("メインの処理が失敗した");
});
