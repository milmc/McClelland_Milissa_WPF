/**
 Milissa McClelland
 SDI Section 04
 Activity_Expressions - Personal
 12-3-2014
 */
alert("How to calculate how many days boxes of dog treats will last.");

var numBoxes = prompt("How many boxes of treats did you buy?");
var amountBox = prompt("How many treats are in one box?");
var dogTreats = prompt("How many treats do you give your dog a day?");
var dogs = prompt("How many dogs do you have?");

var resultTreats = numBoxes * amountBox / dogTreats / dogs;

console.log(resultTreats);

