/**
 Milissa McClelland
 SDI Section
expressions worksheet
 12-3-2014
 */


var originalPrice = prompt("Calculating the price of item. \nWhat is the original price?");
var discountAmount = prompt("What is the discount?");
//var itemName = prompt("What is the item?");
var salesTax = prompt("What is the sales tax?");

var salesAmount = discountAmount / 100 * originalPrice;

var salesPrice = originalPrice - salesAmount;

var taxPercent = salesTax / 100 * salesPrice;

var priceTax = taxPercent + salesPrice;

console.log(priceTax);