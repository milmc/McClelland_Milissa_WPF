/**
 Milissa McClelland
 SDI Section
 Go To Training Week 2
 12-3-2014
 */

//alert("testing if the js file is connected.");

//Create an age calculator

//Ask the user their name
var name = prompt ("Please type in your name.");

//Use the variable and say hello to the user
alert("Welcome " + name + "!" + " Lets find out how old you are.");

//Ask the user what year they were born in
//Create a variable to catch that answer
var yearBorn = prompt("What year were you born?");

//console.log to check that they typed something in
console.log(yearBorn);

//calculate their age

//we need the current year
var currentYear = 2014;

var age = currentYear - yearBorn;

//alert user with their current age
alert(name + " " + "you are " + age + " years old.");

//make it more complex!!!
//ask user how many years in the future they would like to how old they will be
var yearsMore = prompt("How many years in the future would you like to know?");

console.log(yearsMore);

//calculate their future age
//cast the returned variable from a text string to a number
//Number(thing to cast goes here)
var futureAge = age + Number(yearsMore);
console.log(futureAge);

//make the results look pretty

console.log("You will be " + futureAge + " in " + yearsMore + " years.");
alert("You will be " + futureAge + " in " + yearsMore + " years.");



