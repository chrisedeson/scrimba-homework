// Global Variables
let shouldPercent = false
let isAllowed = false

// Operators
const additionSign = document.getElementById("addition")
const subtractionSign = document.getElementById("minus")
const divisionSign = document.getElementById("division")
const multiplicationSign = document.getElementById("multiplication")
const equalsSign = document.getElementById("equals-btn")
const percentSign = document.getElementById("percent")
const clearDisplay = document.getElementById("clear")
const plusOrMinusSign = document.getElementById("plus-minus")
const decimalPoint = document.getElementById("decimal")

const inputDisplay = document.getElementById("input-display")

// Number Digit
document.getElementById("number-one").addEventListener("click", function() {
    inputDisplay.value += "1"
})

document.getElementById("number-two").addEventListener("click", function() {
    inputDisplay.value += "2"
})

document.getElementById("number-three").addEventListener("click", function() {
    inputDisplay.value += "3"
})

document.getElementById("number-four").addEventListener("click", function() {
    inputDisplay.value += "4"
})

document.getElementById("number-five").addEventListener("click", function() {
    inputDisplay.value += "5"
})

document.getElementById("number-six").addEventListener("click", function() {
    inputDisplay.value += "6"
})

document.getElementById("number-seven").addEventListener("click", function() {
    inputDisplay.value += "7"
})

document.getElementById("number-eight").addEventListener("click", function() {
    inputDisplay.value += "8"
})

document.getElementById("number-nine").addEventListener("click", function() {
    inputDisplay.value += "9"
})

document.getElementById("zero-btn").addEventListener("click", function() {
    inputDisplay.value += "0"
})

// Configuring the Operators
subtractionSign.addEventListener("click", function() {
    inputDisplay.value += "-"
})

additionSign.addEventListener("click", function() {
    inputDisplay.value += "+"
})

multiplicationSign.addEventListener("click", function() {
    inputDisplay.value += "*"
})

divisionSign.addEventListener("click", function() {
    inputDisplay.value += "/"
})


percentSign.addEventListener("click", function() {
    inputDisplay.value += "%"
    shouldPercent = true
})

clearDisplay.addEventListener("click", function() {
    inputDisplay.value = ""
})

plusOrMinusSign.addEventListener("click", function() {
    if (inputDisplay.value > -0) {
        inputDisplay.value = "-" + inputDisplay.value
    } else {
        inputDisplay.value = inputDisplay.value.replace("-", "")    // replaces the minus sign with empty string
    }
})

decimalPoint.addEventListener("click", function() {
    if (!inputDisplay.value.includes(".")) {    // ensures that a decimal point is only added once (if dot isn't found, add it!)
        inputDisplay.value += "."
        isAllowed = true
    }

    const lastChar = inputDisplay.value.slice(-1)
    const operators = ["+", "-", "*", "/"]
    
    // Function to check if the last number contains a decimal point
    function hasDecimalPointInLastNumber(value) {
        // Split the input value by operators
        const segments = value.split(/[\+\-\*\/]/);
        // Get the last segment (i.e., the last number before the last operator)
        const lastSegment = segments[segments.length - 1]
        // Check if it contains a decimal point
        return lastSegment.includes(".")
    }
    
    // Add a decimal point if:
    if (operators.includes(lastChar) || inputDisplay.value === "" && isAllowed === true || !hasDecimalPointInLastNumber(inputDisplay.value)) {
        inputDisplay.value += "."
    }
    
})

function displayResult(result) {
    inputDisplay.value = result
}

equalsSign.addEventListener("click", function() {
    // if input display has no values, Do nothing (this is to prevent error "undefined")
    if (inputDisplay.value === "") {
        return
    }

    if (shouldPercent === true) {
        let percentage = inputDisplay.value.slice(0, -1) / 100
        inputDisplay.value = percentage
        shouldPercent = false

    } else {
        let calculatedResult = eval(inputDisplay.value) // eval is a function to calculate
        displayResult(calculatedResult)
    }

})