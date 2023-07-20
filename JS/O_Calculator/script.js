var displayText = document.querySelector("#display");
var num1 = "";
var num2 = "";
var op = "";

function press(num) {
    num1 += num;
    displayText.innerText = num1;
}

function setOP(operator) {
    op = operator;
    num2 = num1;
    num1 = "";
}

function calculate() {
    // Google how to get a number from a string
    var a = parseFloat(num2);
    var b = parseFloat(num1);
    var result = 0;

    if (op == "+") {
        result = a + b;
    } else if (op == "-") {
        result = a - b;
    } else if (op == "*") {
        result = a * b;
    } else if (op == "/") {
        result = a / b;
    }
    // retain result for next calculation
    num1 = result;
    // clear operator for next calculation
    op = "";
    displayText.innerText = result;
}

function clr() {
    num1 = "";
    num2 = "";
    op = "";
    displayText.innerText = "0";
}
