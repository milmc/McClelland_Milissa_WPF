/**
 Milissa McClelland
 SDI Section 04
 Assignment_Conditionals
 12-3-2014
 */

//Will the dragon egg hatch!

var eggAge = prompt("How many days old is the dragon egg?");
var warmCold = prompt("Is the dragon egg warm or cold?");

var hatch;
hatch = (eggAge > 90 && warmCold === "warm") ? "Your dragon egg will hatch soon!" : "Your dragon egg is still growing!";
console.log(hatch);