/**
 Milissa McClelland
 SDI Section 04
 Expression_Worksheet
 12-10-2014
 */
//Celsius to Fahrenheit Converter


var temp = prompt("What is the temperature?");
var tempScale = prompt("Is that C or F?");

if(tempScale == "C"){
 var celsius = ((temp*9)/5)+32;
 console.log("The temperature is " + celsius + " degrees Celsius.");
}else{
 var fahrenheit = ((temp-32)*5)/9;
}