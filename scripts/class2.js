"use strict";

// インスタンスメソッドとプロトタイプメソッドは違う
class Counter {
    constructor() {
        this.count = 0;
        this.increment = () => {
            this.count++;
        };
    }
}
const counterA = new Counter();
const counterB = new Counter();
// 各インスタンスオブジェクトのメソッドの参照先は異なる
console.log(counterA.increment !== counterB.increment); // => true



class ArrowClass {
    constructor() {
        // コンストラクタでの`this`は常にインスタンス
        this.method = () => {
            // Arrow Functionにおける`this`は静的に決まる
            // そのため`this`は常にインスタンスを参照する
            return this;
        };
    }
}
const instance = new ArrowClass();
const method = instance.method;
// 呼び出し方法（ベースオブジェクト）に依存しないため、`this`がインスタンスを参照する
console.log(method()); // => instance

class PrototypeClass {
    method() {
        // `this`はベースオブジェクトを参照する
        return this;
    };
}
const instance2 = new PrototypeClass();
const method2 = instance2.method;
// ベースオブジェクトはundefined
console.log(method2()); // => undefined
