/**
 Milissa McClelland
 SDI Section 04
 Assignment_Conditionals
 12-3-2014
 */

//How much I will make in a week of work, will I get overtime, and what is my may after overtime

var weekHours = prompt("How many hours did you work this week?");
var pay = prompt("How much per hour is your pay?");

var weekPay = pay * weekHours;

if(weekHours > 45){
 console.log("You worked " + weekHours + " hours and made $" + weekPay + ". You will also get overtime.");
 alert("You worked " + weekHours + " hours and made $" + weekPay + ". You will also get overtime.");
}else{
 console.log("You worked " + weekHours + " hours and made $" + weekPay + ". You will not get overtime.");
 alert("You worked " + weekHours + " hours and made $" + weekPay + ". You will not get overtime.");
}