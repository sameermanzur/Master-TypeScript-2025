/*
Different data types can be assigned as variables. 
1. String --> all characters will be treated as String only. 
Syntax for varaiable declaration with dataType 
keywords variableName:dataType = value 
*/
let firstName:string = "Sameer";
let lastName:string = "Manzur"; 
let age:number= 29; // to make it double strict with dataType 

console.log(firstName);
console.log(lastName); 

// firstName= 25 ---> not assignable to any string 
firstName= "20"; 

// 2. Number 
let myNumber:number = 25; 
let piValue:number = 3.14; 


//3. Boolean 
let trueValue:boolean = true; 
let falsevalue:boolean = false; 

//Any dataType 

let myName1:any= 25; 
console.log(myName1);
console.log(typeof(myName1)); 

myName1= "Hiba Jasmine"
console.log(myName1); 
console.log(typeof(myName1)); 

myName1= true 
console.log(myName1);
console.log(typeof(myName1)); 

//variable name can be reused using any . unlike Java 
// the challenge is can kill the program 

//Null and undefined 

let emptyVariable; 
console.log(emptyVariable);
console.log(typeof(emptyVariable)); 

let myName2:any = null;
let myName3 = undefined; 

let nullValue:null= null;  

console.log(myName2); 
console.log(typeof(myName2)); //---> type of null is object 

let undefinedValue:undefined= undefined; 
console.log(undefinedValue); 
