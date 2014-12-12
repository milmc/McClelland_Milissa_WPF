/**
 Milissa McClelland
 SDI Section 04
 Assignment_Conditionals
 12-3-2014
 */

//Will the dragon egg hatch!

//created var prompts for egg age and if it is cold or warm and assigned to var
var eggAge = prompt("How many days old is the dragon egg?");
var warmCold = prompt("Is the dragon egg warm or cold?");
//created var hatch
var hatch;
//created ternary that determines if egg age > 90 and if it is warm, it logs it will hatch. if not it logs it will not hatch
hatch = (eggAge > 90 && warmCold === "warm") ? "Your dragon egg will hatch soon!" : "Your dragon egg is still growing!";
console.log(hatch);
//lets the user know if their egg will hatch or not
alert(hatch);