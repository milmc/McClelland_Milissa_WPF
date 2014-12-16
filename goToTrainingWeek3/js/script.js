/*
Milissa McClelland
SDI Section #4
Go To Training Week #3
12/10/2014
 */

//lalert("Testing to make sure we are working.");
//Create code that sorts through of fruit names and picks out pears
//create our "fruit bowl" array

var bowlOfFruit = ["apple", "banana", "pear", "peach","pear", "tomato", "kiwi", "pear"];
//console logs the WHOLE array
console.log(bowlOfFruit);

//How can I get one fruit inside of the bowl
console.log(bowlOfFruit[1]);

//how many fruits are in the bowl?
//how many items are in an array?
//length of the array
//Dot Syntax - "usa a period!"
console.log(bowlOfFruit.length);

//What is the last index number of the array, using the length property?
//Last index number is ALWAYS one less than the length
//bowlOfFruit.length - 1  is the last index number

//create a var to track the number of pears we have
var totalNumPears = 0;

//Test each item and see if it is a pear
//if(condition to test){code to run if true}
if(bowlOfFruit[0] === "pear"){
    //this will run if true
    //add one to our counting var
    console.log("This fruit is a pear!");
    totalNumPears++;
}else{
    //this code will run if the if statement is FALSE!
    console.log("This fruit not a pear!");
}

if(bowlOfFruit[1] === "pear"){
    //this will run if true
    //add one to our counting var
    console.log("This fruit is a pear!");
    totalNumPears++;
}else{
    //this code will run if the if statement is FALSE!
    console.log("This fruit not a pear!");
}

if(bowlOfFruit[2] === "pear"){
    //this will run if true
    //add one to our counting var
    console.log("This fruit is a pear!");
    totalNumPears++;
}else{
    //this code will run if the if statement is FALSE!
    console.log("This fruit not a pear!");
}

if(bowlOfFruit[3] === "pear"){
    //this will run if true
    //add one to our counting var
    console.log("This fruit is a pear!");
    totalNumPears++;
}else{
    //this code will run if the if statement is FALSE!
    console.log("This fruit not a pear!");
}

//report out how many pears we have
console.log("There are " + totalNumPears+ " number of pears in the bowl.");

//we want the computer to do the heavy lifting for us

//create a new tracking var for number of pars
var pearNumber = 0;

//create a loop for repetitive code

//For Loop - is great for when you know how many times it should run
//for(initialize a counting variable; condition to test; incremental change){code to run each loop around}

for(var i=0; i<8; i++){
    console.log("Inside of the loop " + i );
    console.log(bowlOfFruit[i]);
    //test each fruit if it is a pear
    if(bowlOfFruit[i] === "pear"){
        //add to our pear total
        pearNumber++;
        console.log("This fruit is a pear");
    }else{
        console.log("This fruit is not a pear!");
    }
}

console.log("Total number of pears in the bowl is " + pearNumber);

