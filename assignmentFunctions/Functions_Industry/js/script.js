/**
 Milissa McClelland
 SDI Section 04
 Assignment_Functions
 12-10-2014
 */

var cardAmount = prompt("How many Star Cards did you register?");

var starMoney = starCardEarned(cardAmount);
function starCardEarned(a){
 var amountMoney = a * 5;
 return amountMoney;
}



