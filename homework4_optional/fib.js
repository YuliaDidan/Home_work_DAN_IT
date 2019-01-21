function fib(n) {
    var a = 1;
    var b = 1;
    for (let i = 3; i <=n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fib(-77));