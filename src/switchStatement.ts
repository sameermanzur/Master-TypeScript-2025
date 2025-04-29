// Syntax for switch statements 
/*
switch(expression){
case value1: 
    // code needs to be executed if expression === value 1 
    break; 
case value2: 
    // code to be executed if expression === value 2 
    break; 
    // Additional cases as needed
    default: 
    // code to be executed if none of the cases match

}
*/

let day = 15; 
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday"
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
    default:
        dayName = "This is not a Valid Day";

}
console.log(dayName);  