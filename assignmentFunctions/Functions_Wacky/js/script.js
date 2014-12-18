/**
 Milissa McClelland
 SDI Section 04
 Assignment_Functions
 12-10-2014
 */
//alerts user to what is going on
alert("Can you defeat the mighty dragon? \nLets find out!");

//parameters for the random number
function randomizr(startNum,endNum){
 //does the math for random number and stores it to var randomNumber
 var randomNumber = Math.round(Math.random() * (endNum - startNum) + Number(startNum));
 //spits out numberNumber result to outside of the function
 return randomNumber;
}
//stores the function result in var results
var results = randomizr(75,200);
//storage for function result and sets the argument for the function
var result = totalDMG(prompt("What is your strength? (1 - 5)"), results);
//sets the parameters for the function
function totalDMG(s,d){
//s is multiplied by d and assigned to var dMG
 var dMG = s * d;
//spits the result out of the function
 return dMG;
}
//storage for var
var defeatDrag;
//weighs results agains 145(dragons health) and depending on the outcome the outcome is chosen
defeatDrag = (results >= 145) ? "You did " + results + " damage to the dragon and it is defeated!" : "You only did " + results + " damage and the dragon is now angry and eats you.";
//logs the results of defeatDrag to console
console.log(defeatDrag);
//alerts the user of the outcome
alert(defeatDrag);



