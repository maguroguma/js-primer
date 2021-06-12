// await式はasync関数内でのみ使える！
/*
async function asyncMain() {
    // PromiseがFulfilledまたはRejectedとなるまで待つ
    await Promiseインスタンス;
    // Promiseインスタンスの状態が変わったら処理を再開する
}
*/

async function asyncMain() {
    const value = await Promise.resolve(42);
    console.log(value); // => 42
}
const p = asyncMain(); // Promiseインスタンスを返す
p.then(value => {
  console.log(`結果: ${value}`);
});
