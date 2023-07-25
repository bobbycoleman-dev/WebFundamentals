var arr1 = ["a", "b", "c", "d", "e", "f", "g"];
var removeIdx1 = 2;
var expected1 = "b";

var arr1Expected = ["a", "c", "d", "e"];

function removeAt(items, idx) {
    var removedIndex = items[idx];
    for (i = idx; i < items.length - 1; i++) {
        items[i] = items[i + 1]; // -> c = d
    }
    items.pop();
    return [items, removedIndex];
}

console.log(removeAt(arr1, removeIdx1));
