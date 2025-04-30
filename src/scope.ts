// Until how much you can do or accessible like visibility or availability of your variables 

//Global scope - Variables declared outside any function or block are globally accessible.

const globalConst = "I am const in Global Scope"; // variables are declared outside the function / block 
let globalLet = "Global let";
var globalVar = "Global Var";

function someFunction() {
    console.log(globalVar)
};

console.log(globalVar)

//Function scope - Variables declared are accessible within the entire function where they're defined.

function demoFunction() {

var functionVar = "Function Var";
let functionLet = "Function Let";
const functionConst = "Function const";

console.log("Inside Function");
console.log(globalVar); // Accessible ✅
console.log(globalLet); // Accessible ✅
console.log(globalConst);// Accessible ✅
console.log(functionVar);// Accessible ✅
console.log(functionConst);// Accessible ✅
console.log(functionLet);// Accessible ✅



if (true) {
    // 🟢 Block Scope--> Variables declared with let and const are only accessible within the nearest set of curly braces {} where they're defined.
    var blockVar = "I am a var in a block"; // Var is Not a block-Scoped (it escapes)
    let blockLet = "I am a let in a block";
    const blockConst = "I am a const in a block";

    console.log("Inside Block");
    console.log(blockVar); // Accessible ✅
    console.log(blockLet);  // Accessible ✅
    console.log(blockConst);  // Accessible ✅
}

console.log("Outside Block");  
console.log(blockVar);// ✅ (Bad Behaviour: `var` leaks out) 
// console.log(blockLet); ❌ Error: Not accessible outside  the block 
// console.log(blockConst);  ❌Error: Not accessible outside  the block  

}

demoFunction();

console.log("Outside Function"); 
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);
// console.log(functionVar); ❌Error: Not accessible outside the function 







