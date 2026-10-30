var concatStr = (a: string, b?: string, c?: string) => {
    return a + b + c;
}

console.log(concatStr("Hello", " ", "world"));
console.log(concatStr("I am using TypeScript..."));