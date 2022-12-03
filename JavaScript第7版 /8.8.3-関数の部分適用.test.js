function partialLeft(f, ...outerArgs) {
    return function (...innerArgs) {
        let args = [...outerArgs, ...innerArgs]
        return f(...args)
    }
}

function partialRight(f, ...outerArgs) {
    return function (...innerArgs) {
        let args = [...innerArgs, ...outerArgs]
        return f.apply(this, args)
    }
}

function partial(f, ...outerArgs) {
    return function (...innerArgs) {
        let args = [...outerArgs]
        let innerIndex = 0;
        for (let i = 0; i < args.length; i++) {
            if (args[i] === undefined) {
                args[i] = innerArgs[innerIndex++]
            }
        }
        args.push(...innerArgs.slice(innerIndex))
        return f.apply(this, args)
    }
}

const f = (x, y, z) => x * (y - z)
test('部分適用', () => {
    expect(partialLeft(f, 2)(3, 4)).toBe(-2) // 最初の引数をバインドする
    expect(partialLeft(f, 2, 3)(4)).toBe(-2) // 最初の引数をバインドする

    expect(partialRight(f, 2)(3, 4)).toBe(6) // 最後の引数をバインドする
    expect(partialRight(f, 4, 2)(3)).toBe(6) // 最後の引数をバインドする

    expect(partial(f, undefined, 2)(3, 4)).toBe(-6) // 真ん中の引数をバインドする
    expect(partial(f, undefined, undefined)(3, 2, 4)).toBe(-6) // 真ん中の引数をバインドする
})