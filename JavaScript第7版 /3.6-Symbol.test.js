// Symbol値はプロパティとして利用できる
// Symbol値は同じ値を２度返すことはない
// そのため、Symbol値をプロパティとして利用することで、
// 他のプロパティと衝突することを防ぐことができる
test('Symbol', () => {
    const strname = 'string name'
    const symname = Symbol('prooname')

    expect(typeof strname).toBe('string')
    expect(typeof symname).toBe('symbol')

    const o = {}
    o[strname] = 1
    o[symname] = 2

    expect(o[strname]).toBe(1)
    expect(o[symname]).toBe(2)

    // Symbol.for()関数に文字列を引数として渡すと、文字列に関連づけられたSymbol値が返される
    // 同じ文字列を使って呼び出した場合は、常に同じ値を返す
    const s = Symbol.for('shared')
    const t = Symbol.for('shared')
    expect(s).toBe(t)
    expect(Symbol.keyFor(s)).toBe('shared')
})

