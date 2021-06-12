try {
    console.log("try節:この行は実行されます");
    // 未定義の関数を呼び出してReferenceError例外が発生する
    undefinedFunction();
    // 例外が発生したため、この行は実行されません
} catch (error) {
    // 例外が発生したあとはこのブロックが実行される
    console.log("catch節:この行は実行されます");
    console.log(error instanceof ReferenceError); // => true
    console.log(error.message); // => "undefinedFunction is not defined"
} finally {
    // このブロックは例外の発生に関係なく必ず実行される
    console.log("finally節:この行は実行されます");
}

console.log('---');

// catch節のみ
try {
    undefinedFunction();
} catch (error) {
    console.error(error);
}

console.log('---');

// finally節のみ
try {
    undefinedFunction();
} finally {
    console.log("この行は実行されます");
}
// finally節のみでは例外がキャッチされないため、この行は実行されません
console.log('実行されないよ');

