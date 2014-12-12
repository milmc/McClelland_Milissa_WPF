/**
 Milissa McClelland
 SDI Section 04
 Assignment_Conditionals
 12-3-2014
 */

//How much I will make in a week of work and will I get overtime

//created prompts for how many hours and how much pay and assigned to var
var weekHours = prompt("How many hours did you work this week?");
var pay = prompt("How much per hour is your pay?");

//created var math, how many hours multiplied by how much an hour
var weekPay = pay * weekHours;

//created if that determines overtime, anything greater than 45 is overtime
if(weekHours > 45){
 //created console log and alert to tell how much was made that week and that you will get over time
 console.log("You worked " + weekHours + " hours and made $" + weekPay + ". You will also get overtime.");
 alert("You worked " + weekHours + " hours and made $" + weekPay + ". You will also get overtime.");
//created else if you worked less than 45 hours
}else{
 //logs to console and alerts how much was made that week and tells that you did not get overtime
 console.log("You worked " + weekHours + " hours and made $" + weekPay + ". You will not get overtime.");
 alert("You worked " + weekHours + " hours and made $" + weekPay + ". You will not get overtime.");
}