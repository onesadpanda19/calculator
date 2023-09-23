let values = []
let math = []
let solution = []

//create operate function
const operator = (num1, op, num2) => {
    if (op === '+') {add (num1, num2)}
    else if (op === "-") {subtract (num1, num2)}
    else if (op === "*") {multiply (num1, num2)}
    else if (op === "/") {divide (num1, num2)}
}

const clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", (e) => clear(e)) 

function clear(e) {
    values = [];
    let display = document.querySelector("#display")
    display.innerHTML = ''
}

function add (a, b) {
    return a + b
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    return a / b 
}

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", (e) => addDigit(e)))

function addDigit (e) {
    // Setting up clicked button and display
    const currentButton = e.target.classList.value;
    if (currentButton === "clear") {
        return
    }
    const getDisplay = document.querySelector("#display");
    const content = document.createElement('div')
    getDisplay.appendChild(content)
    content.classList.add('content');
    content.textContent = currentButton;
    
    

    // Array of the button values and operator
    values.push(currentButton)

    // 1 - Split array into 3 arrays (one for firstNumber, one for operator, one for secondNumber)
    // 2 - Join the arrs into strings 
    // 3 - pass the variables into the operator() function
    // 4 - display results
    // 5 - push result back into a new empty value arr for the first num of next operation


    // gitDisplay.removeChild

    // Setting text of display
    console.log(currentButton);
    console.log(getDisplay);  
    console.log(values)
    // doing math
    }
