/**
 Milissa McClelland
 SDI Section 04
 Activity_Expressions - Wacky
 12-3-2014
 */

//Alert user of what is going on.
alert("The Beetle Convention. \nHow many $5 beetles do you want to buy? \nHow much money will you have left over?");

//Ask user for input on how much money they brought to the beetle convention and assign it to beetleMoney variable
var beetleMoney = prompt("How much money did you bring to the Beetle Convention?");

//Ask user for how many of each type of beetle they want and assign to respective variable.
var beetleGoliath = prompt("How many Goliath Beetles would you like?");
var beetleRhinoceros = prompt("How many Rhinoceros Beetles would you like?");
var beetleStag = prompt("How many Stag Beetles would you like?");
var beetleTitan = prompt("How many Titan Beetles would you like?");

//Created a beetle array.
var beetles = [beetleGoliath, beetleRhinoceros, beetleStag, beetleTitan];

//Adds together the amount of beetles for each type the user input earlier and assign to variable beetleAmount.
var beetleAmount = Number(beetles[0]) + Number(beetles[1]) + Number(beetles[2]) + Number(beetles[3]);

//Multiply beetleAmount by 5 and assign to variable beetleTotal.
var beetleTotal = beetleAmount * 5;

//Subtract beetleMoney from beetleTotal to get how much money is left and assigned to variable beetleResult.
var beetleResult = beetleMoney - beetleTotal;

//Created an if else to tell user either how many beetles and how much they have left over OR tell them they have
//selected too many beetles and they must try again.
if(beetleTotal <= beetleMoney) {
    console.log("You have selected " + beetleAmount + " beetles and will have have $" + beetleResult + " left over.");
} else {
    console.log("You have selected too many beetles for the amount you have. \nPlease try again.");
}