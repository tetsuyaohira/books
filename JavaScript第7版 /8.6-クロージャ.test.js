test('クロージャ', () => {
    let scope = 'global scope';

    function checkscope() {
        let scope = 'local scope'
        function f() { return scope } // このscopeは一番近い外部スコープの`local scope`を参照する
        return f();
    }

    expect(checkscope()).toBe('local scope')

})
