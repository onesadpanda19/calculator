let values = []
let math = []
let solution = 0
let firstNum = ""
let ops = ["+", "-", "/", "*"]
let secondNum = ""
let op = ""

//create operate function
const operator = (num1, op, num2) => {
    // Parse strings into nums (parseInt) 
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    if (op === '+') {
      solution = add(num1, num2)
    }
    else if (op === "-") {
        solution = subtract (num1, num2)
    }
    else if (op === "*") {
        solution = multiply (num1, num2)
    }
    else if (op === "/") { 
        solution = divide (num1, num2)
    }
    const getSolution = document.querySelector("#solution");
    const content = document.createElement('div')
    getSolution.appendChild(content)
    content.classList.add('solution')
    content.textContent = solution;


    console.log (num1)
    console.log (num2)
    console.log(solution)
    return solution

    // op = op
    // firstNum = 123
    // secondNum = 12312
    // solution = 123124
    // values = [1,2,3,4,4,1,2]
}

const clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", (e) => clear(e)) 

function clear(e) {
    values = [];
    let display = document.querySelector("#display") // Parent of content
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
//  - - -  -  -  *
// [1,3,4,'.',2,'-',1,2]
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
console.log(firstNum)
console.log(op)
console.log(secondNum)
    // After loop
operator(firstNum, op, secondNum)

values = [];
secondNum = ''
firstNum = `${solution}`
 // Cleanup
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
    if (currentButton === "equals") {
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
