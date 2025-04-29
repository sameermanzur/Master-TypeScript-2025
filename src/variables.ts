/*
Variables- placeholder to assign the values to it. 
3 Keywords for Variable declaration- usage is depends on scope  

Assigned values are expected/ allowed to change 
Syntax 
var - 
keyword variableName = value 

let - 
keyword letName = value 

Assigned value should't change. 
const - 

Syntax for reassigning values to existing value - 
variableName = "Assign the new value"
for const => values can't be reassigned. 
*/

var myName = "Sameer";
let myAge = 20;
const myGender = "Male"; 


console.log(myName);
console.log(myAge);
console.log(myGender);

myName= "Hiba Jasmine";
myAge= 18;

console.log(myName);
console.log(myAge);
// console.log(myGender);

// myGender = "Female"; ---> This will never happen. 