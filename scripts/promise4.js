// Promiseのコンストラクタの処理の場合と同様に、
// thenやcatchのコールバック関数内で発生した例外は自動的にキャッチされる。
Promise.resolve().then(() => {
    // 例外が発生すると、thenメソッドはRejectedなPromiseを返す
    throw new Error("例外");
}).then(() => {
    // このthenのコールバック関数は呼び出されません
}).catch(error => {
    console.log(error.message); // => "例外"
});



// thenやcatchメソッドは "Fulfilled" 状態のPromiseインスタンスを作成して返す。
Promise.reject(new Error("エラー")).catch(error => {
    // console.log(error); // Error: エラー
    console.log(error.message);
}).then(() => {
    console.log("thenのコールバック関数が呼び出される");
});
