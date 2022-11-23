test('プロパティのテスト in', () => {
    let o = {x: 1}
    expect("x" in o).toBe(true)
    expect("y" in o).toBe(false)
    expect("toString" in o).toBe(true) // in演算子は継承プロパティを検索する
})


test('プロパティのテスト hasOwnProperty', () => {
    let o = {x: 1}

    expect(o.hasOwnProperty("x")).toBe(true)
    expect(o.hasOwnProperty("y")).toBe(false)
    expect(o.hasOwnProperty("toString")).toBe(false) // hasOwnPropertyは継承プロパティを検索しない
})

test('プロパティのテスト Object.prototype.propertyIsEnumerable', () => {
    let o = {x: 1}
    // propertyIsEnumerable()は、プロパティが独自プロパティで列挙可能ならtrueを返す
    expect(o.propertyIsEnumerable("x")).toBe(true)
    expect(o.propertyIsEnumerable("toString")).toBe(false)
    expect(Object.prototype.propertyIsEnumerable("toString")).toBe(false)
})