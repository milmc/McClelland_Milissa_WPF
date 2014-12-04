/**
 Milissa McClelland
 SDI Section 04
 Activity_Expressions - Personal
 12-3-2014
 */

//Alert user what is going on.
alert("How to calculate how many days boxes of dog treats will last.");

//Prompt the user for info on how many boxes they bought and store variable in numBoxes.
var numBoxes = prompt("How many boxes of treats did you buy?");

//Prompt the user for info on how many treats are in one box and store variable in amountBox.
var amountBox = prompt("How many treats are in one box?");

//Prompt the user for info on how many treats they give their dog in a day and store variable in dogTreats.
var dogTreats = prompt("How many treats do you give your dog a day?");

//Prompt the user for info on how many dogs they have and store variable in dogs.
var dogs = prompt("How many dogs do you have?");

//Multiply numBoxes by amountBox.
//Then divide amount by dogTreats.
//And again divide amount by dogs. Store amount in variable resultTreats
var resultTreats = numBoxes * amountBox / dogTreats / dogs;

//log result to console
console.log(numBoxes + " " + " boxes of treats for " + dogs + " dogs will last" + " " + resultTreats + " days.");





