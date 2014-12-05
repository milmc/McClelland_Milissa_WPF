/**
 Milissa McClelland
 SDI Section 04
 Activity_Expressions - Personal
 12-3-2014
 */

alert("The Beetle Convention. \nHow many $5 beetles do you want to buy? \nHow much money will you have left over?");

var beetleMoney = prompt("How much money did you bring to the Beetle Convention?");

var beetleGoliath = prompt("How many Goliath Beetles would you like?");
var beetleRhinoceros = prompt("How many Rhinoceros Beetles would you like?");
var beetleStag = prompt("How many Stag Beetles would you like?");
var beetleTitan = prompt("How many Titan Beetles would you like?");

var beetles = [beetleGoliath, beetleRhinoceros, beetleStag, beetleTitan];

var beetleAmount = Number(beetles[0]) + Number(beetles[1]) + Number(beetles[2]) + Number(beetles[3]);

var beetleTotal = beetleAmount * 5;

var beetleResult = beetleMoney - beetleTotal;

