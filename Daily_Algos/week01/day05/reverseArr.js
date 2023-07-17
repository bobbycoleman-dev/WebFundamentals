var arr1 = [42, 3, 12, 8, 7, 89]
//! expected output: [89, 7, 8, 12, 3, 42]

// function reverseArray(arr) {
//     var revArr = []
//     for(var i = arr.length-1; i >= 0; i--) {
//         revArr.push(arr[i])
//     }
//     console.log(revArr)
// }
// reverseArray(arr1)


function reverseArray2(arr) {
    for (var i = 0; i < Math.floor(arr.length /2); i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
        console.log(arr)
    }
   return arr
}



revArr = reverseArray2(arr1)
console.log(revArr)