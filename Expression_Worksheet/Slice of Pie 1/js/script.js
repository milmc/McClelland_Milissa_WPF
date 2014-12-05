/**
 Milissa McClelland
 SDI Section 04
 expressions worksheet
 12-3-2014
 */

//Number of slices per person at the party

var partyPeople = 14;
//people at party
var pizzaOrder = 6;
//pizza ordered
var slicesPizza = 8 * pizzaOrder;
//number of slices of pizza; 8 slices per pizza multiplied by pizzaOrder and assign to slicesPizza var
var result = slicesPizza / partyPeople;
//divide slicesPizza by partyPeople to get slices per person and assign to result var
//print how many slices per person ate at party
console.log("Each person ate" + " " + result + " " + "slices of pizza a the party.")