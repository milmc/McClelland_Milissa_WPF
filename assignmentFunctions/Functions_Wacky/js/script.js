/**
 Milissa McClelland
 SDI Section 04
 Assignment_Functions
 12-10-2014
 */

alert("Can you defeat the mighty dragon? \nLets find out!");


function randomizr(startNum,endNum){
 var randomNumber = Math.round(Math.random() * (endNum - startNum) + Number(startNum));
 return randomNumber;
}
var results = randomizr(75,200);


