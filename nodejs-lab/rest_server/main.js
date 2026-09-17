// main.js

// Import your custom modules using relative paths
// The ./ is required for local files. Without it, Node looks in node_modules.
const math = require("./math-utils");
const strings = require("./string-utils");

// Also import a built-in module
const path = require("path");

// Use the math module
console.log("--- Math Operations ---");
console.log("5 + 3 =", math.add(5,3));
console.log("10 - 4 =", math.subtract(10,4));
console.log("6 * 7 =", math.multiply(6,7));
console.log("15 / 3 =", math.divide(15,3));
console.log("PI =", math.PI);

// Destructuring import
const {add,multiply }= require("./math-utils");
console.log("Destructured add(2, 2):",add(2,2));

// Use the string module
console.log("\n--- String Operations ---");
console.log("capitalize:", strings.capitalize("hello WORLD"));
console.log("reverse:", strings.reverseString("Node.js"));
console.log("word count:", strings.countWords("  Hello world from Node  "));
console.log("truncate:", strings.truncate("This is a very long sentence",15));

// Use the built-in path module
console.log("\n--- Path Operations ---");
console.log("Current file:", path.basename(__filename));
console.log("Current directory:", path.basename(__dirname));