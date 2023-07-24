// TODO: Print all the integers from 1 to 255.
function print1to255() {
    for (var i = 1; i <= 255; i++) {
        console.log(i);
    }
}

// print1to255();

// TODO: Print integers from 0 to 255, and with each integer print the sum so far.
function printIntsAndSum0to255() {
    var sum = 0;
    for (var i = 0; i <= 255; i++) {
        sum += i;
        console.log("current number is: ", i, "current sum is ", sum);
    }
}

// printIntsAndSum0to255();

// TODO: Given an array, find and print its largest element.
function printMaxOfArray(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}

// printMaxOfArray([4, 45, 96, 3, 8, 27, 55]);

// TODO: Create an array with all the odd integers between 1 and 255 (inclusive).
function returnOddsArray1to255() {
    var arr = [];
    for (var i = 1; i <= 255; i += 2) {
        arr.push(i);
    }
    console.log(arr);
}

// returnOddsArray1to255();

// TODO: Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
        }
    }
    console.log(count);
}

// returnArrayCountGreaterThanY([4, 45, 96, 3, 8, 27, 55], 20);

// TODO: Given an array, print the max, min and average values for that array.
function printMaxMinAvgArray(arr) {
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }
    var avg = sum / arr.length;
    console.log(min, max, avg);
}

// printMaxMinAvgArray([4, 45, 96, 3, 8, 27, 55]);

// TODO: Replace any negative array values with 'Dojo'.
function swapStringForArrayNeg(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    console.log(arr);
}

// function swapStringForArrayNeg2(arr) {}

// swapStringForArrayNeg([4, 45, -96, 3, 8, -27, 55]);

// TODO: Print all odd integers from 1 to 255.
function printOdds1to255() {
    for (var i = 1; i <= 255; i += 2) {
        console.log(i);
    }
}

// printOdds1to255();

// TODO: Iterate through a given array, printing each value.
function printArrayVal(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// printArrayVal([4, 45, -96, 3, 8, -27, 55]);

// TODO: Analyze an array’s values and print the average
function printAvgOfArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum / arr.length;
    console.log(avg);
}

// printAvgOfArray([4, 45, 96, 3, 8, 27, 55]);

// TODO: Square each value in a given array, returning that same array with changed values
function squareArrayVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    console.log(arr);
}

// squareArrayVals([4, 45, 96, 3, 8, 27, 55]);

// TODO: Return the given array, after setting any negative values to zero.
function zeroOutArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr);
}

// zeroOutArrayNegativeVals([4, 45, -96, 3, 8, -27, 55]);

// TODO: Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.
function shiftArrayValsLeft(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0;
    console.log(arr);
}

shiftArrayValsLeft([4, 45, 96, 3, 8, 27, 55]); // [45, 96, 3, 8, 27, 55, 0]

/*
ar.length = 7
i = 0, 4 = 45
i = 1, 45 = 96
i = 2, 96 = 3
i = 3, 3 = 8
i = 4, 8 = 27
i = 5, 27 = 55 
*/
