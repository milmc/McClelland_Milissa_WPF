/**
 Milissa McClelland
 SDI Section 04
 Activity_Expressions - Industry
 12-3-2014
 */

//Figuring out what to tag an item when it goes on sale.
//Alerting user what is going on.
alert("What to tag an item that has gone on sale.");

//Created variables and assigned them to variables originalPrice & percentageOff.
var originalPrice = prompt("What is the original price?");
var percentageOff = prompt("What is the percentage off?");

//Took inputs from above variables and divided percentageOff by 100 and assigned it to variable convertPercent.
var convertPercent = percentageOff / 100;

//First multiply convertPercent by originalPrice then subtract it from originalPrice.
var amountOff = originalPrice - (convertPercent * originalPrice);

//Log to console with the sentence 'percentage' off of $original price will be $amount off'.
console.log(percentageOff + "%" + " off of " + "$" + originalPrice + " will be $" + amountOff + ".");

//Alert the user of the outcome.
alert(percentageOff + "%" + " off of " + "$" + originalPrice + " will be $" + amountOff + ".");



