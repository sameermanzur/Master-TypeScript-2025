/* if Block 

if (condition){
code to be exectuted when consition is met 
}

*/

let age2 = 15;
if (age2 > 18) {
    console.log("Adult")
};

/*  if else block 

if (condition){
code to be exectuted when consition is met 

} 
else  {
}
*/

let age3 = 16;
if (age3 > 18) {
    console.log("Adult")
}
else {
    console.log("Minor")
};

// if - Else -If Block ---> combination of multiple if else blocks, if I have many conditions 
/* Syntax  

if (condition)✅{
code to be executed when condition is met 
} 
else if (condition)✅ {
}
else (No condition) ❌  {
}

*/
let age4 = 25;

if (age4 >= 0 && age4 <= 10) {
    console.log("Child");
}
else if (age4 >= 18 && age4 <= 20) {
    console.log("Teenage");

}
else if (age4 >= 25 && age4 <= 40) {
    console.log("Adult");
}

else {
    console.log("Old Age");
};

// Nested If Else

let age5 = 15;
if (age5 >= 0 && age5 <= 60) {
    if (age5 >= 25 && age5 <= 30) {
        console.log("Adult");
    } else if (age5 >= 15 && age5 <= 20) {
        console.log("Teenage");
    }
    else {
        console.log("old Age");
    }
};






