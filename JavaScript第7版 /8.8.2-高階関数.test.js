test('高階関数1', () => {
    function not(f) {
        return function () {
            let result = f.apply(this, arguments)
            return !result
        }
    }

    const even = x => x % 2 === 0
    const odd = not(even);

    expect([1, 3, 5, 7, 9].every(odd)).toBe(true)
    expect(odd(1)).toBe(true)
    expect(odd(2)).toBe(false)
    expect(even(1)).toBe(false)
    expect(even(2)).toBe(true)
})

test('高階関数2', () => {
    const map = function (a, ...args) {return a.map(...args)} // 実行結果を返す
    function mapper(f) {return a => map(a, f)} // 関数を返す

    const increment = x => x + 1
    const incrementAll = mapper(increment)
    const incrementAll3 = map([1, 2, 3], increment)

    expect(incrementAll([1,2,3])).toEqual([2,3,4])
    expect(incrementAll3).toEqual([2,3,4])

    // いろいろ試す
    function mapper2() {return f => mapper(f)}
    const incrementAll2 = mapper2(increment)
    const incrementAll21 = incrementAll2(increment)
    expect(incrementAll21([1,2,3])).toEqual([2,3,4])

})
