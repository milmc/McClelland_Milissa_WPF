/**
 Milissa McClelland
 SDI Section 04
 Assignment_Conditionals
 12-10-2014
 */

//Can you go shopping for yourself after buying groceries and putting money into savings

//created prompts and had user assign values to each and assigned them to var
var budget = prompt("What is your budget?");
var groceries = prompt("How much did you spend on groceries?");
var savings =  prompt("How much did you put into savings?");

//validates prompts had something entered into them
if (budget === ""){
 budget = prompt("You did not enter anything in.\nWhat is your budget?");
}

if (groceries === ""){
 groceries = prompt("You did not enter anything in.\nHow much did you spend on groceries?");
}
if (savings === ""){
 savings = prompt("You did not enter anything in.\nHow much did you put into savings?");
}

// /created if so when you spend less than 200 on groceries and put more than 200 into savings
if (groceries < 200 && savings > 200) {
 //subtracts groceries and savings from budget and assigns to var
 var leftOver1 = budget - groceries - savings;
 //logs to console and alerts how much is left and and you can shop
 console.log("You will have $" + leftOver1 + " and you can go shopping.");
 alert("You will have $" + leftOver1 + " and you can go shopping.");

//created else if that determines if you spend more on groceries and put more or equal than 300 into savings
}else if (groceries > 200 && savings >= 300){
 //subtracts groceries and savings from budget and assigns to var
 var leftOver2 = budget - groceries - savings;
 //logs to console and alerts how much is left and you can shop
 console.log("You will have $" + leftOver2 + " and you can go shopping.");
 alert("You will have $" + leftOver2 + " and you can go shopping.");
//if above conditions are not met then below code runs
}else{
 //subtracts groceries and savings from budget
 var leftOver3 = budget-groceries-savings;
 //logs to console and alerts how much is leftover and that you CANNOT go shopping
 console.log("You will have $" + leftOver3 + " and you cannot go shopping.");
 alert("You will have $" + leftOver3 + " and you cannot go shopping.");
}



