/*
Milissa McClelland
SDI sec 4
Loops - Do While Loop
 */

var b = 10//sets up the index

while(b > 0){//checks the condition
    console.log(b + " kegs on the wall.");
    b--;//increments or decrements the index
}

console.log("------do while loop------")

var c = 10;

do{
    console.log(c + " Kegs on the wall.");
    c--;
}
while (c > 0);

console.log("----For Loops----");

for(var i = 10; i > 0; i--){
    console.log(i + " Kegs on the wall.");
}