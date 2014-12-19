/**
 Milissa McClelland
 SDI Section 04
 Assignment_Functions
 12-10-2014
 */

//How much the interest for the price of a car will be, can you afford it with what you already have, or do you need a loan
//alerts user to what is happening
alert("How much is the interest of your car loan.");
//creates var storage for function and sets the arguments
var resultInterest = interestCalc(prompt("How much is your loan?"),prompt("How much is the loan %?"),prompt("How many months to pay off car loan?"));
//sets the parameters for the function
function interestCalc(p,r,t) {
//converts the loan percentage to a decimal and assigns it to a var
 var loanPercentConvert = r / 100;
 //calculates the interest - p multiplied by loanPercentConvert multiplied by t then divided by 12
 var interest = (p * loanPercentConvert * t) / 12;
 //spits out the results of the math above out of the function
 return interest;
}
//logs the result to the console
console.log("Your car loan will have $" + resultInterest + " in interest.");
//alerts the user of the outcome of what they entered in
alert("Your car loan will have $" + resultInterest + " in interest.");







