/**
 Milissa McClelland
 SDI Section 04
 Expression_Worksheet
 12-10-2014
 */
//Celsius to Fahrenheit Converter

//prompted user for input on the temperature and what temperature scale it is in and assigned them to variables
var temp = prompt("What is the temperature?");
var tempScale = prompt("Is that C or F?");

//created a check to see if it is in celsius
if(tempScale == "C"){
 //if it is in celsius then it runs the math to convert the temp to fahrenheit
 var fahrenheit = ((temp*9)/5)+32;
 //logs to the console the findings of var fahrenheit
 console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");
 //if the temp is NOT in celsius then the else runs
}else{
 //if in fahrenheit it runs the math to convert the temp to celsius
 var celsius = ((temp-32)*5)/9;
 //logs to the console the findings of var celsius
 console.log("The temperature is " + celsius + " degrees Celsius.");
}