/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function add(n1, n2) {
    return n1 + n2;
}

function addNumbers() {
    let n1 = Number(document.getElementById("addend1").value);
    let n2 = Number(document.getElementById("addend2").value);
    let sum = add(n1, n2);
    let outputElement = document.getElementById("sum");

    outputElement.setAttribute("value", sum);
}

let additionButton = document.getElementById("addNumbers");
additionButton.addEventListener("click", addNumbers);
// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(n1, n2) {
    return n1-n2;
}

function subtractNumbers() {
    document.getElementById("difference").setAttribute("value", subtract(Number(document.getElementById("minuend").value), Number(document.getElementById("subtrahend").value)));
}
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

let multiply = (n1, n2) => {
    return n1 * n2;
}

let multiplyNumbers = () => {
    let n1 = Number(document.getElementById("factor1").value);
    let n2 = Number(document.getElementById("factor2").value);
    let out = multiply(n1, n2);
    let outputElement = document.getElementById("product");

    outputElement.setAttribute("value", out);
}

let multiplyButton = document.getElementById("multiplyNumbers");
multiplyButton.addEventListener("click", multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(n1, n2) {
    if (n2 == 0) {
        return "Cannot Divide By Zero";
    }
    return n1 / n2;
}

function divideNumbers() {
    let n1 = Number(document.getElementById("dividend").value);
    let n2 = Number(document.getElementById("divisor").value);
    let out = divide(n1, n2);
    let outputElement = document.getElementById("quotient");

    outputElement.setAttribute("value", out);
}

let divideButton = document.getElementById("divideNumbers");
divideButton.addEventListener("click", divideNumbers);
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
// js vars are typeless, yeah?

// Step 2: Declare a variable to hold the current year

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year

let currentDate = new Date();
var year;

year = document.createTextNode(currentDate.getFullYear());

let yearElement = document.getElementById("year");
yearElement.appendChild(year);





/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numbers = [];
for (let i = 1; i <= 25; i++) {
    numbers.push(i);
}
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
let outputElement = document.getElementById("array");
let outputNode = document.createTextNode(numbers.toString());
outputElement.appendChild(outputNode);
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let oddNumbers = numbers.filter((n) => n % 2 == 1);

outputElement = document.getElementById("odds");
outputNode = document.createTextNode(oddNumbers.toString());
outputElement.appendChild(outputNode);
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evenNumbers = numbers.filter((n) => n % 2 == 0);

outputElement = document.getElementById("evens");
outputNode = document.createTextNode(evenNumbers.toString());
outputElement.appendChild(outputNode);
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
outputElement = document.getElementById("sumOfArray");
outputNode = document.createTextNode(numbers.reduce(add, 0));
outputElement.appendChild(outputNode);
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
outputElement = document.getElementById("multiplied");
outputNode = document.createTextNode(numbers.map(n => n * 2));
outputElement.appendChild(outputNode);
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
outputElement = document.getElementById("sumOfMultiplied");
outputNode = document.createTextNode(numbers.map(n => n * 2).reduce(add, 0));
outputElement.appendChild(outputNode);