/**
 Milissa McClelland
 SDI Section
expressions worksheet
 12-3-2014
 */

//calculate sales price, with and without tax
//created var prompts for info and assigned info to respective var names
var originalPrice = prompt("Calculating the price of item. \nWhat is the original price?");
var discountAmount = prompt("What is the discount?");
var itemName = prompt("What is the item?");
var salesTax = prompt("What is the sales tax?");

//took discountAmount and divided it by 100 then multiplied by original price and assigned result to var salesAmount
var salesAmount = discountAmount / 100 * originalPrice;

//subtracted originalPrice by salesAmount and assigned to var salesPrice
var salesPrice = originalPrice - salesAmount;

//divided salesTax by 100 then multiplied by salesPrice and assigned var to taxPercent
var taxPercent = salesTax / 100 * salesPrice;

//added taxPercent to salesPrice and assigned to var priceTax
var priceTax = taxPercent + salesPrice;

//logged results
console.log("Your " + itemName + " was originally $" + originalPrice + ", but after a " + discountAmount + "% discount, it is now " + salesPrice + " without tax, and $" + priceTax + " with tax.");