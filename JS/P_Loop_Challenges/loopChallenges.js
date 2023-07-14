// 1. Print odds 1-20
for (var i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
console.log("END OF CHALLENGE 1")

// 2. Decreasing Multiple of 3 from 100 to 0
for (var i = 100; i >= 0; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}
console.log("END OF CHALLENGE 2")

// 3. Print the sequence (4, 2.5, 1, -0.5, -2, -3.5) using a loop
var sequence = [4, 2.5, 1, -0.5, -2, -3.5];
for (var i = 0; i < sequence.length; i++) {
    console.log(sequence[i]);
}
console.log("END OF CHALLENGE 3")

// 4. Sigma: Add values from 1-100 to var sum -> expect 5050
var sum = 0
for(var i = 1; i <= 100; i++) {
    sum += i
}
console.log(sum)
console.log("END OF CHALLENGE 4")

// 5. Factorial: multiple values from 1-12 to var product -> expect 47900160
var product = 1
for(var i = 1; i <=12; i++) {
    product *= i
}
console.log(product)
console.log("END OF CHALLENGE 5")