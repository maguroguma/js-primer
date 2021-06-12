// `promise`にはResolvedまたはRejectedなPromiseインスタンスがランダムで入る
// const promise = Math.random() < 0.5 ? Promise.resolve() : Promise.reject();
// promise.then(() => {
//     console.log("Promise#then");
// }).catch((error) => {
//     console.log("Promise#catch");
// }).finally(() => {
//     // 成功、失敗どちらの場合でも呼び出される
//     console.log("Promise#finally");
// });

function dummyFetch(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}
// リソースを取得中かどうかのフラグ
let isLoading = true;
dummyFetch("/resource/A").then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
}).finally(() => {
    isLoading = false;
    console.log("Promise#finally");
});
