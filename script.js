let values = []
let math = []
let solution = 0
let firstNum = ""
let ops = ["+", "-", "/", "*"]
let secondNum = ""
let op = ""
let display = document.querySelector("#display")

/**
 * takes in three string and converts them into numbers, then calls the add, subtract, divide, or multiply functions, and displays the solution on the screen
 * 
 * @param {srting} num1 - first number to prase and use
 * @param {string} op - an operator telling what function to run
 * @param {string} num2 - second number to parse and use
 * @returns {number} returns the solution to the math 
 */
const operator = (num1, op, num2) => {
    // Parse strings into nums (parseInt) 
    let num3 = parseFloat(num1).toFixed(2)
    let num4 = parseFloat(num2).toFixed(2)
    num3 = parseFloat(num3)
    num4 = parseFloat(num4)
    if (op === '+') {
      solution = add(num3, num4)
    }
    else if (op === "-") {
        solution = subtract (num3, num4)
    }
    else if (op === "*") {
        solution = multiply (num3, num4)
    }
    else if (op === "/") { 
        solution = divide (num3, num4)
    }
    // Adding solution number to display
    if (!isNaN(solution)){
        const getSolution = document.querySelector("#solution");
        const content = document.createElement('div')
        let oldSolution = document.querySelector('.solution')
        if (oldSolution) {
            getSolution.removeChild(oldSolution)  
        }
        content.classList.add('solution')
        getSolution.appendChild(content)
        content.textContent = solution;
    }
    // Clearing content   
    let clearMath = document.querySelectorAll('.content')
    clearMath.forEach((content) => {
        display.removeChild(content)
    })
    return solution
}

const clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", (e) => clear(e)) 
/**
 * Selects content div and solution div and clears all data
 * 
 * @param {object} e - html event object
 * @returns {undefined} - returns nothing or clears all
 */
function clear(e) {
    values = [];
    let clearSolution = document.querySelector("#solution"); // Parent of solution
    let contentList = document.querySelectorAll('.content') // List of content
    let solutionList = document.querySelectorAll(".solution") // List of solutions
    solutionList.forEach((solution) => {
        clearSolution.removeChild(solution)
    })
     // loop over list of content
    contentList.forEach((content) => {
        display.removeChild(content) // remove each content from parent
    })
    secondNum = ''
    firstNum = ''
    solution = ''
    op = ''
    
}

const equalButton = document.querySelector(".equals")
equalButton.addEventListener("click", (e) => equals(e))

/**
 *  takes an event and splits the values array it into firstNum, secondNum, and an operator and calls operator function
 * 
 * @param {object} e - an html event object
 * @returns {undefined} returns nothing 
 */
function equals(e) {
    values.forEach((value) => {
    if (ops.includes(value)) {
       op = value
    }
    else { 
        if (op !== "") {
            secondNum = secondNum.concat (value) 
        }
        else {
            firstNum = firstNum.concat (value)
        }  
    }
    }) 
    // After loop
    operator(firstNum, op, secondNum)
    op = ''

    values = [];
    secondNum = ''
    firstNum = `${solution}`
    if (isNaN(firstNum)){
        clear(firstNum)
    }
    
    // Cleanup
}

/** 
 * Takes in two numbers, and returns the sum
 * 
 * @param {number} a - First Number to add
 * @param {number} b - Second Number to add
 * @returns {number} sum of a + b
*/
function add (a, b) {
    return a + b
}
/**
 * Takes in two numbers, and returns the total
 * 
 * @param {number} a - first number to subtract 
 * @param {number} b - second number to subtract
 * @returns {number} total of a - b
 */
function subtract (a, b) {
    return a - b
}
/**
* Takes in two numbers, and returns the total
 * @param {number} a - first number to  multiply
 * @param {number} b - second number to multiply
 * @returns {number} total of a * b
 */
function multiply (a, b) {
    return a * b
}
/**
 * Takes in two numbers, and returns the total
 * 
 * @param {number} a - first number to divide 
 * @param {number} b - second number to divide
 * @returns {number} total of a / b
 */
function divide (a, b) {
    return a / b 
}

let buttons = document.querySelectorAll("button");



buttons.forEach((button) => button.addEventListener("click", (e) => addDigit(e)))

/**
 * takes in a click event and adds that button to the display or calls the clear or equals function
 * 
 * @param {object} e - an html event object
 * @returns {object} dose not return
 */
function addDigit (e) {
    // Setting up clicked button and display
    const currentButton = e.target.classList.value;
    if (currentButton === "clear") {
        return
    }
    if (currentButton === "equals") {
        return
    }
    
    if (ops.includes(currentButton)) {
        // If the last button they press was an op
        let lastButton = values.slice(-1);
        let lastop = lastButton[0]
        if (ops.includes(lastop)){
            console.log("i messed up")
        return
    }
        // fix last button if its an op
        // If they have an op in values already
        if (values.some(value => {
            return ops.includes(value)
        })){
            equals()
             console.log('hi')}
}
    

    const getDisplay = document.querySelector("#display");
    const content = document.createElement('div')
    getDisplay.appendChild(content)
    content.classList.add('content');
    content.textContent = currentButton;
    
    values.push(currentButton);
}