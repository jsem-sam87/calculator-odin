let res;
let num1;
let operator;
let num2; 

function add(a, b) {
    return res = a + b;    
}

function subtract(a, b) {
    return res = a - b;    
}

function multiply(a, b) {
    return res = a * b;
}

function divide(a, b) {
    return res = a / b;
}

function operate(a, operator, b) {
    num1 = a;
    operator = operator;
    num2 = b;

    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            console.log("error !!!!!")    
            
    }
    // operator === "+" ? add(num1, num2) :
    // operator === "-" ? subtract(num1, num2) :
    // operator === "*" ? multiply(num1, num2) :
    // operator === "/" ? divide(num1, num2) :
    // null;

}

// num1 = 12;
// num2 = 5;
// operator = "+";

// operate(num1, operator, num2);
// console.log(res);

// console.log(add(6, 9));
// multiply(5,4);
// console.log(res);
// add(5,4);
// console.log(res);