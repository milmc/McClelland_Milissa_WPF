/*
Milissa McClelland
SDI sec 1412
Go To Training Week 4
12/17/2014
 */

//alert("Testing to see if the js file is connected");

//Create a function that spits a random integer between two given values

//Ask the user for a min number
//var min = prompt("Let's get a random number between two values. \nPlease type in the minimum value.");

//validate that the user actually typed in something, so not blank

/*
//older way of doing it
if(min===""){
    //reprompt the user
    min = prompt("Please do not leave blank \nPlease type in a min number!");
}*/

//validate using a while loop
//test to see if blank
/*
while(min===""){
    min = prompt("Please do not leave blank! \nPlease type in the minimum value.");

}
//validate that it is a number using a while loop
while(isNaN(min)){
    //reprompt the user
    min = prompt("Please only type in numbers. \nPlease type in a min number.");

}


//validate using a combined while loop
while(min === "" || isNaN(min)){
    if(min === ""){
        //re-prompt the user
        min = prompt("Please do not leave blank. \nPlease type in a min value");
    }else{
        min = prompt("Please only type in numbers. \nPlease type in a min value.")
    }

}

*/


//test if the user types in something specific
var userGoodMood = prompt("Are you in a good mood? \n Please answer yes or no.");

while(userGoodMood != "yes" && userGoodMood != "Yes" && userGoodMood != "no" && userGoodMood != "No"){
    //re-prompt the user
    //Y is not the same as y
    userGoodMood = ("Please only type in yes or no. \nAre you in a good mood?");

}

if(userGoodMood === "yes" || userGoodMood === "Yes"){
    console.log("Great! Glad your in a fabulous mood!");
}else{
    Console.log("Sorry to hear that. \nMaybe you should code more, that should make you happy!")
}
