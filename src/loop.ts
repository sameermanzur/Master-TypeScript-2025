/* For Loop 
when I know no. of times the loop runs. 
Syntax 
for (initialization; condition; increment/decrement){
 code need to be executed in each iteration 
}
*/

for(let i=1;i<6;i++){
    console.log(i);
}
for(let j=10;j>=6; j--){
    console.log(j);
}

// // While loop - until its connected keep trying 
// // include timeout orelse the loop will continue to run. count++ 

let count=1; 
while(count<=10){
    console.log(count); 
    count++
}

// Loop control statements 

// Break 

for (let i =1;i< 6; i++){
    if(i==3) { 
        break;
}
console.log(i);
} // it will stope at 3 

// Continue- Behaves as skip 

for(let k=1; k < 6; k++) {
    if( k==3) {
        continue; 
    }
    console.log(k); 
}
