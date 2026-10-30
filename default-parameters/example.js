"use strict";
var concatStr = function (a, b, c = "c") {
    return a + b + c;
};
console.log(concatStr("a", "b", "c"));
console.log(concatStr("d", "e"));
