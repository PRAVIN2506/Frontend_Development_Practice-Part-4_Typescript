var concatStr = function (a: string, b: string, c: string = "c") {
    return a + b + c;
}

console.log(concatStr("a", "b", "c"));
console.log(concatStr("d", "e"));