// Similar to array; have a fixed length and their elements can have different data types. 
// :[], hold different data type safety. And more strict, useful when the value is known in the upfront. 

let personDetail:[string,number,number,boolean] = ["Sameer", 30, 5.5, false]; //source element should match the target 
console.log(personDetail[0]); 
console.log(personDetail[1]); 

//initial declaration vs adding value 

personDetail.push("Manzur");
console.log(personDetail); 



 