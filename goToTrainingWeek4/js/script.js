/*
Milissa McClelland
SDI sec 1412
Go To Training Week 4
12/17/2014
 */

//alert("Testing to see if the js file is connected");

//Create a function that spits a random integer between two given values

//Ask the user for a min number
var min = prompt("Let's get a random number between two values. \nPlease type in the minimum value.");

//validate that the user actually typed in something, so not blank

/*
//older way of doing it
if(min===""){
    //reprompt the user
    min = prompt("Please do not leave blank \nPlease type in a min number!");
}*/

//validate using a while loop
//test to see if blank
/*
while(min===""){
    min = prompt("Please do not leave blank! \nPlease type in the minimum value.");

}
//validate that it is a number using a while loop
while(isNaN(min)){
    //reprompt the user
    min = prompt("Please only type in numbers. \nPlease type in a min number.");

}
*/

//validate using a combined while loop
while(min === "" || isNaN(min)){
    //re-prompt the user
    min = prompt("Please do not leave blank and only type in numbers. \nPlease type in a min value");
}