
// Arithemetic Operators 

let a = 25;
let b = 10;
let sum = a + b;
console.log(sum);

let difference = a - b;
console.log(difference);

let multiply = a * b;
console.log(multiply);

let divide = a / b; //--> Quotient 
let divide1 = a % b; //--> Remainder 
console.log(divide);

// Comparison Operator ---> output is always boolean 
// equal (only value); strict equal (both value and dataType) 

let x = 5;
let y = 10;

let isLooseEqual = x == y; // true 
let isStrictEqual = x === y;
console.log(isLooseEqual);
console.log(isStrictEqual);
let notEqual = x != y;
let greaterThan = x > y;
let greaterThanEqual = x >= y;
let leeserThan = x < y;
let lesserThanEqual = x <= y; 

// Logical Operators ----> Always only for Boolean 
// 1 - true and 0- false 
let isTrue = true;
let isfalse = false; 
let andResult = isTrue && isfalse; //false 
let orResult = isTrue || isfalse; // true 
let notResult = !isTrue // false 

// Assignment Operators 
let num = 5; 
num += 5 ; // num = num +5 
num -= 5; // num = num -5 
num *= 5; // num = mum * 5 
num /= 5; // num = num /5 
num %= 5; // num = num % 5 

console.log(num); 

// Ternary Operator 
// Syntax 
// keyword variableName = condition?: passValue : failValue 
//The ternary operator allows you to quickly decide between two values depending on whether a condition is true or false. 

let age1 = 10; 
let message = age1>=18 ? "Adult" : "Minor"

console.log(message); 