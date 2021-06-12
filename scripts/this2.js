// 通常の関数やメソッドは呼び出し時に暗黙的にthisの値を受け取り、
// 関数内のthisはその値を参照する。
// Arrow Functionはこの暗黙的なthisの値を受け取らない。
// Arrow Function内のthisは、スコープチェーンの仕組みと同様に外側の関数
// （この場合はprefixArrayメソッド）を探索する。
// よってArrow Functionで定義したコールバック関数は、
// 呼び出し方に関係なく、常に外側の関数のthisをそのまま利用する
const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
        return strings.map((str) => {
            // Arrow Function自体は`this`を持たない
            // `this`は外側の`prefixArray`関数が持つ`this`を参照する
            // そのため`this.prefix`は"pre"となる
            return this.prefix + "-" + str;
        });
    }
};
// このとき、`prefixArray`のベースオブジェクトは`Prefixer`となる
// つまり、`prefixArray`メソッド内の`this`は`Prefixer`を参照する
const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings); // => ["pre-a", "pre-b", "pre-c"]

// Arrow Functionにおけるthisは、
// 「Arrow Function自身の外側のスコープに定義された最も近い関数のthisの値」となる。
//
// Arrow Functionはthisをbindできない
//
// メソッドではない通常の関数に置いてはthisを使うべきではない！
