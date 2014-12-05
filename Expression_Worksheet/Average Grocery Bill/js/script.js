/**
 Milissa McClelland
 SDI Section
expressions worksheet
 12-3-2014
 */

//Average spent on groceries over 5 weeks

//Created array with the amounts spent over 5 weeks and assigned it to grocerySpent var.
var grocerySpent = [150, 89,126,180,117];

//Added up totals and assigned them to groceryTotal var.
var groceryTotal = Number(grocerySpent[0] + Number(grocerySpent[1]) + Number(grocerySpent[2]) +Number(grocerySpent[3]) + Number(grocerySpent[4]));

//Divided groceryTotal by 5 (the number of grocery bills).
var aveSpent = groceryTotal / 5;

//printed out the total spend and ave grocery bill
console.log("You have spent a total of $" + groceryTotal + " on groceries over 5 weeks. That is and average of $" + aveSpent + " per week.");













//console.log(groceryTotal);