var foo = {},F = function () {

}
Object.prototype.a = "value a"
Function.prototype.b = "value b"

console.log(foo.a);
console.log(foo.b);

console.log(F.a);
console.log(F.b);

