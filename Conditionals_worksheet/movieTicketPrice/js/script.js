/**
 Milissa McClelland
 SDI Section 04
 Expression_Worksheet
 12-10-2014
 */

//Movie Ticket Price
//alert the user before prompts
alert("Movie Ticket Price!");

//created prompts for age and time and assigned them to var
var age = prompt("How old are you?");
var time = prompt("What time does the movie start?");

//created var for ticket prices
var normalTicket = "$12.00";
var senior10 = "$7.00";
var matinee = "$7.00";

//created if to see if time was between 3 and 5
if(time >= 3 && time <= 5){
 //printed out ticket price matinee if time was between 3 and 5
 console.log("The ticket price is " + matinee + ".");
//created else if to see if age input was less than or equal to 10 OR greater than or equal to 55
}else if(age <= 10 || age >= 55){
 //printed out ticket price for senior10 if above condition was met
 console.log("The ticket price is " + senior10 + ".");
//if above conditions were not met then the normalTicket price is printed
}else{
 console.log("The ticket price is " + normalTicket + ".");
}