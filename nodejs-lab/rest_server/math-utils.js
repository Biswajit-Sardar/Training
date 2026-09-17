// math-utils.js

// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

// Constant
const PI = 3.14159265359;

// Export functions and constant
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    PI
};