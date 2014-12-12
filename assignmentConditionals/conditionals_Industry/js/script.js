/**
 Milissa McClelland
 SDI Section 04
 Assignment_Conditionals
 12-3-2014
 */

//Do you qualify for a discount

alert("Do you get to have a discount on your item?");
var originalPrice = prompt("How much is the item?");
var employee = prompt("Are you an employee?");



if(employee === "yes"){
 var employPrice = originalPrice - (.2*originalPrice);
 console.log("Your item for $" + originalPrice + " is 20% off and is now $" + employPrice + ".");
 alert("Your item for $" + originalPrice + " gets an employee discount and is 20% off. Is now $" + employPrice + ".");
}
