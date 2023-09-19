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
    const getDisplay = document.querySelector("#display");
    const content = document.createElement('div')
    getDisplay.appendChild(content)
    content.classList.add('content');
    content.textContent = currentButton;
    values.push(currentButton)
    // gitDisplay.removeChild

    // Setting text of display
    console.log(currentButton);
    console.log(getDisplay);  
    console.log(values)
    // doing math
    }
