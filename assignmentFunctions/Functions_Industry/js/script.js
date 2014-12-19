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


if(starMoney > 100){
 console.log("You registered " + cardAmount +" Star Cards and earned $" + starMoney + ". \nYou are now on the Top Register List!");
 alert("You registered " + cardAmount +" Star Cards and earned $" + starMoney + ". \nYou are now on the Top Register List!");
}else if(starMoney < 100 && starMoney > 0){
 console.log("You registered " + cardAmount +" Star Cards and earned $" + starMoney + ".");
 alert("You registered " + cardAmount +" Star Cards and earned $" + starMoney + ".");
}else{
 console.log("You did not register any Star Cards.");
 alert("You did not register any Star Cards.");
}

