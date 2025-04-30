/* Piece of Block of resuable code 
Syntax 
function functionName() {
// code logic 
}
*/

function greeting(){
    console.log("I am a function")
}

greeting() // Always call function with paranthesis, can be callled any time 

// Parameter and return types 
// Syntax 
/*
function functionName(parameterName:parameterDataType) {
// code logic 
}
*/


function greetings1(studentName:string){
    // console.log("Hi ",studentName); // option 1  to print Hi Sameer 
    console.log(`Hi ${studentName}`); // option 2 to print Hi student name to pass the parameters 
}


greetings1("Hiba");
greetings1("Hasina");
greetings1("Manzur"); 

// passing a data to the function is called Parameter 
// output from the function called return 

/*
function functionName(parameterName:parameterDataType) {
// code logic to use the parameterName
return <returnValue> 
}
*/

function add(a:number, b:number){
    return a+b;
}

console.log(add(2,3)); 

// Optional Parameter , Default Parameter 
/*
function functionName(parameterName?:parameterDataType,parameterName?:parameterDataType=defaultValue ) {
// code logic to use the parameterName
return <returnValue> 
}
*/

function greetings2(studentName:string="Sameer", location?:string){
    console.log(`Hi ${studentName} joining from ${location}`);
}; 


greetings2("Hiba", "Chennai"); 
greetings2() //Hi Sameer joining from undefined --> Always combine option with default value so it is won't be undefined. 
greetings2(null, "Chennai"); 



