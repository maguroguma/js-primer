// 左辺については真偽値への暗黙的な型変換を行う
console.log(true && '右辺の値');
console.log(false && '右辺の値');

// Nullish coalescing
console.log(null ?? '右辺の値');      // 右辺の値を返す
console.log(undefined ?? '右辺の値'); // 右辺の値を返す
console.log(0 ?? '右辺の値');
