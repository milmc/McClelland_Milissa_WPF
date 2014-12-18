/*
 Milissa McClelland
 SDI sec 1412
Functions Worksheet - Stung!
 12/17/2014
 */

//How to calculate how many stings to kill an animal using a function in javascript

//creates a place to store the return with "var result" and sets the argument for the function
var result = stingWeight(prompt("How much does the animal weigh in pounds?"));
//sets the functions parameter
function stingWeight(w){
 //var to store the math to find how many bee stings to kill an animal per pound
 var stings = 8.666666667 * w;
 //spits out the information to the outside of the function and stores it in var result
 return stings;
}
//logs to console the results of the function
console.log("It takes " + result + " bee stings to kill this animal.");