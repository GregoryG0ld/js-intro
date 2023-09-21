
const num1 = 5;
const num2 = 7;

// Operation Addition
const sum = num1 + num2;
console.log(sum);

// Operation Subtraction
const sub = num1 - num2;
console.log(sub);

// Operation Multiplication
const mult = num1 * num2;
console.log(mult);

// Operation div
const div = num1 / num2;
console.log(div);

// Modulus (Remainder)
const modResult = 7 % 5;
console.log(modResult);

// Operation Exponentiation
const exp = num1 ** num2;
console.log(exp);

// Divide by Zero

const zero = 0;

const result1 = 1 / zero;  // Infinity 
const result2 = -1 / zero;  // -Infinity 

console.log(result1, result2);

//Float Digits Multiply 
const n1 = 0.39;
const n2 = 0.22;

console.log(n1 * n2);

//Not precise result due to the way floating-point numbers are stored and the limitations of binary representation.

const n3 = 0.2;
const n4 = 0.2;

console.log(n3 * n4); // 0.04000000000000001
