let strname = "string name"
let symname = Symbol("prooname")
console.log(typeof strname)
console.log(typeof symname)

let o = {}

o[strname] = 1
o[symname] = 2

console.log(o[strname])
console.log(o[symname])

