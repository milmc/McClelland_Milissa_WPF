/**
 Milissa McClelland
 SDI Section 04
 Expression_Worksheet
 12-10-2014
 */

//Check the Login

//created prompt for username and password var and var for the actual username and password
var inputUN = prompt("What is your username?");
var inputPW = prompt("What is your password?");
var userName = "Godzilla54";
var password = "Mothra64";

//created if statement to see if username and password entered match the var
if(inputUN === userName && inputPW === password){
 //logged to console welcome if BOTH username and password are correct
 console.log("Welcome, " + userName + "!");
//created else if to see if var inputUN and userName are different but inputPW and password are the same
}else if(inputUN != userName && inputPW === password){
 //logged to console user not found if username is wrong but password is right
 console.log("User not found. Try again.");
//created else for a wrong password
}else{
 //logged to console passwords don't match
 console.log("Password does not match our records.");
}