let res;
let num1;
let operator;
let num2; 


const result_div = document.querySelector(".result_div");
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btnC = document.getElementById("btnC");
const btnAdd = document.getElementById("btnAdd");
const btnSubtract = document.getElementById("btnSubtract");
const btnMultiply = document.getElementById("btnMultiply");
const btnDivide = document.getElementById("btnDivide");
const btnEquals = document.getElementById("btnEquals");

let operator_choosed = false;
let operator_limit = 1;
let operators_choosed = 0;

let first_num_choosed = false;
let calculation_happened = false;


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

function funC() {
    result_div.innerHTML = "";
    operator_choosed = false;
    first_num_choosed = false;
    operators_choosed = 0;
}

function addNum(button) {
    if (calculation_happened) {
        result_div.innerHTML = "";
        calculation_happened = false;
        operators_choosed = 0;
    }

    result_div.innerHTML += button.innerHTML;
    operator_choosed = false;
    first_num_choosed = true;
    // if (calculation_happened) {
    //     result_div.innerHTML = `${Number(this.innerHTML)}`;
    // }
}

function addOperator(button) {
    if (result_div.innerHTML === "Error!")
    {
        result_div.innerHTML = "";
    }
    if (calculation_happened) {
        // result_div.innerHTML = "";
        calculation_happened = false;
        operators_choosed = 0;
        operator_choosed = false;
    }
    if (operator_choosed == false && operators_choosed < operator_limit && first_num_choosed) {
        result_div.innerHTML += button.innerHTML;
        operators_choosed++;
        operator_choosed = true;
        operator = `${button.innerHTML}`;
    }
}

function funEquals(){
    // if (result_div.innerHTML.includes("/[+\-*/]/)") == false){
    //     result_div.innerHTML = ""
    // }
    let the_formula_array = result_div.innerHTML.split(/[+\-*/]/);
    first_num = the_formula_array[0];
    num1 = first_num;
    second_num = the_formula_array[1];
    num2 = second_num;
    
    operate(Number(num1), operator, Number(num2));
    //console.log(res);
    result_div.innerHTML = res;
    num1 = res;
    first_num_choosed = true;
    operator_choosed = true;
    operators_choosed = 0;

    calculation_happened = true;

    if (isNaN(res) || res === Infinity || res === -Infinity) {
        result_div.innerHTML = "Error!";
        first_num_choosed = false;
        calculation_happened = true;
        return;
    }
}

// if (res == ("NaN" || "undefined" || "Infinity" ))
// {
//     result_div.innerHTML = "Error";
// }



// fix next: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
    round the decimals of res 
*/