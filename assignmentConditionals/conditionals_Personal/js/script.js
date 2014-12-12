/**
 Milissa McClelland
 SDI Section 04
 Assignment_Conditionals
 12-3-2014
 */

//Can you go shopping for yourself after buying groceries and putting money into savings


var budget = prompt("What is your budget?");
var groceries = prompt("How much did you spend on groceries?");
var savings =  prompt("How much did you put into savings?");

if (groceries < 200 && savings > 200) {
 var leftOver1 = budget - groceries - savings;
 console.log("You will have $" + leftOver1 + " and you can go shopping.");
 alert("You will have $" + leftOver1 + " and you can go shopping.");
}else if (groceries > 200 && savings >= 300){
 var leftOver2 = budget - groceries - savings;
 console.log("You will have $" + leftOver2 + " and you can go shopping.");
 alert("You will have $" + leftOver2 + " and you can go shopping.");
}else{
 var leftOver3 = budget-groceries-savings;
 console.log("You will have $" + leftOver3 + " and you cannot go shopping.");
 alert("You will have $" + leftOver3 + " and you cannot go shopping.");
}



