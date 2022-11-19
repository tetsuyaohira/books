test('関数による配列の処理',() => {
    const sum = (x, y) => x + y
    const square = x => x * x
    const map = function (a, ...args) {return a.map(...args)}
    const reduce = function (a, ...args) { // ...argsは引数の配列。残余引数
        return a.reduce(...args) // ...argsは配列を展開して引数に渡す。スプレッド演算子
    }
    let data = [1, 1, 3, 5, 5];
    let mean = reduce(data, sum) / data.length;
    let deviations = map(data, x => x - mean);
    let stddev = Math.sqrt(reduce(map(deviations, square), sum) / (data.length - 1));
    expect(stddev).toBe(2)
})

