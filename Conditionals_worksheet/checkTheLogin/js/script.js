/**
 Milissa McClelland
 SDI Section 04
 Expression_Worksheet
 12-10-2014
 */

//Check the Login

var inputUN = prompt("What is your username?");
var inputPW = prompt("What is your password?");
var userName = "Godzilla54";
var password = "Mothra64";

if(inputUN === userName && inputPW === password){
 console.log("Welcome, " + userName + "!");
}else if(inputUN != userName && inputPW === password){
 console.log("User not found. Try again.");
}else{
 console.log("Password does not match our records.");
}