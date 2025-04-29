/*fundamental data structures to store,manipulate,use collection of values. 
 more than one value 
 2 ways to create arrays [] 
Syntax 1 
keyword variableName = [value1, value2, value3];

Syntax 2 
keyword variableName = new Array(value1,value2, value3); 
array numbers will always starts form 0 
*/

const fruits = ['apple', 'mango', 'banana']; 
const numerArray = [1,2,3]; 
console.log(fruits); 

console.log(fruits[0]); // Array will automatically assign numbers -help us to call specific element in the array 

// reassigning the particular element in the array 
fruits[1] = 'Strawberry'; 
console.log(fruits[1]); 

const numberArray= [1,2,3,4,5]; 
console.log(numberArray); 

numberArray.push(6); // push to the last 
console.log(numberArray); 

numberArray.pop(); //remove the last element w/o defining 
console.log(numberArray); 

numberArray.unshift(0) // added the 0 first element 
console.log(numberArray);

numberArray.shift(); //remove the added first element 
console.log(numberArray); 

// Orders in the Array can be broken during slpice or sorting the array. or using Objects and Maps expecting array like behaviour. 
const slicedArray = numberArray.slice(0,4); // slice from 0-3 
console.log(slicedArray); 

// filter- always runs behind the condition 
// arrow symbol => 
// i want to move elements from numbered array to filtered array 
// and the condition is number greater than 2 

const filterArray = numberArray.filter((num)=> num>2); // prints 3,4,5 
console.log(filterArray); 

// To have Mixed DataTypes 

let numbersArray:any[]= [1,2,'strawberry', 'mango',5,6]; 
console.log(numbersArray); 

