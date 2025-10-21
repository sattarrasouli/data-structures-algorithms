function selectionSort(arr) {
    var _a;
    for (var i = 0; i < arr.length; i++) {
        var minIdx = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        _a = [arr[minIdx], arr[i]], arr[i] = _a[0], arr[minIdx] = _a[1];
    }
    return arr;
}
//example
console.log(selectionSort([43, 345, 533, 2, 5]));
