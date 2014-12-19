/**
 Milissa McClelland
 SDI Section 04
 Assignment_Functions
 12-10-2014
 */

//How many star cards you registered, how much you earned, and if you are on the Top register list
//alerted the user to what is happening
alert("How many Star Cards did you register, How much did you earn from them, and are you on the Top Register List!");
//prompted the user for how many star cards they registered and assigned them to a var
var cardAmount = prompt("How many Star Cards did you register?");
//created arguments for function and created the storage for the result
var starMoney = starCardEarned(cardAmount);
//created the parameters for the function
function starCardEarned(a){
//function math, multiply a(cardAmount) by 5(amount earned per card registered)
 var amountMoney = a * 5;
//spits out result from above to outside the function
 return amountMoney;
}

//evaluates if starMoney is greater than 100
if(starMoney > 100){
//if above is TRUE then below is logged to console and the user is alerted
 console.log("You registered " + cardAmount +" Star Cards and earned $" + starMoney + ". \nYou are now on the Top Register List!");
 alert("You registered " + cardAmount +" Star Cards and earned $" + starMoney + ". \nYou are now on the Top Register List!");
//if the if is FALSE then this runs and evaluates if starMoney is less than 100 AND starMoney is greater than 0
}else if(starMoney < 100 && starMoney > 0){
//if else if is TRUE then the bottom is logged to console and the user is alerted of the outcome
 console.log("You registered " + cardAmount +" Star Cards and earned $" + starMoney + ".");
 alert("You registered " + cardAmount +" Star Cards and earned $" + starMoney + ".");
//if both statements above are FALSE then else runs
}else{
//No cards sold is logged to console and the user is alerted
 console.log("You did not register any Star Cards.");
 alert("You did not register any Star Cards.");
}

