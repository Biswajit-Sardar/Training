// math-utils.mjs

export function add(a,b) {
    return a+ b;
}

export function subtract(a,b) {
    return a- b;
}

export function multiply(a,b) {
    return a* b;
}

export function divide(a,b) {
    if (b=== 0) {
        throw new Error("Cannot divide by zero");
    }
    return a/ b;
}

export const PI = 3.14159265359;

// You can also have a default export
export default {
    add,
    subtract,
    multiply,
    divide,
    PI
};