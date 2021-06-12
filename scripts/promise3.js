// const fulFilledPromise = Promise.resolve();

// const fulFilledPromise = Promise.resolve(); と同じ意味
// const fulFilledPromise = new Promise((resolve) => {
//     resolve();
// });

// `resolve(42)`された`Promise`インスタンスを作成する
const fulFilledPromise = Promise.resolve(42);
fulFilledPromise.then(value => {
    console.log(value); // => 42
});



// 同期的なコードが先に呼ばれる？
const promise = new Promise((resolve) => {
    console.log("1. resolveします");
    resolve();
});
promise.then(() => {
    console.log("3. コールバック関数が実行されました(fulfilled)");
});
console.log("2. 同期的な処理が実行されました");



Promise.reject(new Error("エラー")).catch(() => {
    console.log("2. コールバック関数が実行されました(rejected)");
});
console.log("1. 同期的な処理が実行されました");
