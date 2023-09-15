let content = [""]
let math = ['']
let solution = ['']



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

    // gitDisplay.removeChild

    // Setting text of display
    console.log(currentButton);
    console.log(getDisplay);  
    
    // doing math
    }
