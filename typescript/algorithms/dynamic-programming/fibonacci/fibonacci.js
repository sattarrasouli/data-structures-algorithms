function fibonacciDP(num) {
    if (num <= 1)
        return num;
    var prev = 0, curr = 1;
    for (var i = 2; i <= num; i++) {
        var temp = curr + prev;
        prev = curr;
        curr = temp;
    }
    return curr;
}
console.log(fibonacciDP(10));
