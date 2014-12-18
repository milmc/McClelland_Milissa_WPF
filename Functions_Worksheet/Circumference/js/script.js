/*
 Milissa McClelland
 SDI sec 1412
 Functions Worksheet - Circumference
 12/17/2014
 */
//How to find the circumference of a circle using a javascript function.


//creates a place to store the return with "var result" and sets the argument for the function
var result = calcCir(prompt("What is the radius of the circle?"));
//sets the functions parameter
function calcCir(r){
 //var to store the math to find the circumference of a circle
 var circumference = 2 * Math.PI * r;
 //spits out the information to the outside of the function and stores it in var result
 return circumference;
}
//logs to console the results of the function
console.log("The circumference of the circle is: " + result);





