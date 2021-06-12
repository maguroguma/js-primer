"use strict";

// ブラウザでは`window`オブジェクト、Node.jsでは`global`オブジェクトを参照する
console.log(globalThis);



// 関数でthisを使う意味はない
function fn1() {
    return this;
}
const fn2 = function() {
    return this;
};
// 関数の中の`this`が参照する値は呼び出し方によって決まる
// `fn1`と`fn2`どちらもただの関数として呼び出している
// メソッドとして呼び出していないためベースオブジェクトはない
// ベースオブジェクトがない場合、`this`は`undefined`となる
console.log(fn1()); // => undefined
console.log(fn2()); // => undefined

// オブジェクトのメソッドでのthis
const obj = {
    // 関数式をプロパティの値にしたメソッド
    method1: function() {
        return this;
    },
    // 短縮記法で定義したメソッド
    method2() {
        return this;
    }
};
// メソッド呼び出しの場合、それぞれの`this`はベースオブジェクト(`obj`)を参照する
// メソッド呼び出しの`.`の左にあるオブジェクトがベースオブジェクト
console.log(obj.method1()); // => obj
console.log(obj.method2()); // => obj

// 一つ隣を参照する
const obj1 = {
    obj2: {
        obj3: {
            method() {
                return this;
            }
        }
    }
};
// `obj1.obj2.obj3.method`メソッドの`this`は`obj3`を参照
console.log(obj1.obj2.obj3.method() === obj1.obj2.obj3); // => true



// thisの問題のパターン: メソッドのコンテキストを入れ替える
const person = {
    fullName: "Brendan Eich",
    sayName: function() {
        // `this`は呼び出し元によって異なる
        return this.fullName;
    }
};
// `sayName`メソッドは`person`オブジェクトに所属する
// `this`は`person`オブジェクトとなる
console.log(person.sayName()); // => "Brendan Eich"
// `person.sayName`を`say`変数に代入する
// const say = person.sayName;
// 代入したメソッドを関数として呼ぶ
// この`say`関数はどのオブジェクトにも所属していない
// `this`はundefinedとなるため例外を投げる
// say(); // => TypeError: Cannot read property 'fullName' of undefined

// call, apply, bindは関数やメソッド内のthisを明示的に指定するためのメソッド！

// 関数オブジェクトのcallメソッドでthisを明示的に指定できる
function say(message) {
    return `${message} ${this.fullName}！`;
}
const person2 = {
    fullName: "Brendan Eich"
};
// `this`を`person`にして`say`関数を呼びだす
console.log(say.call(person2, "こんにちは")); // => "こんにちは Brendan Eich！"

// callとapplyの違い
function add(x, y) {
    return x + y;
}
// `this`が不要な場合は、nullを渡す
console.log(add.call(null, 1, 2)); // => 3
console.log(add.apply(null, [1, 2])); // => 3

// bindメソッドは束縛を定義した上で新しい関数を返す
// `this`を`person`に束縛した`say`関数をラップした関数を作る
const sayPerson = say.bind(person, "こんにちは");
console.log(sayPerson()); // => "こんにちは Brendan Eich！"



// 高階関数ではthisがトラブルになりやすい（下は回避例）
const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
        // `that`は`prefixArray`メソッド呼び出しにおける`this`となる
        // つまり`that`は`Prefixer`オブジェクトを参照する
        const that = this;
        return strings.map(function(str) {
            // `this`ではなく`that`を参照する
            return that.prefix + "-" + str;
        });
    }
};
// `prefixArray`メソッドにおける`this`は`Prefixer`
const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings); // => ["pre-a", "pre-b", "pre-c"]
