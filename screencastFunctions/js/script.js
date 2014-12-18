/*
Milissa McClelland
SDI sec 4
Functions -
anonymous Functions
 */

/*
function calcArea(width, height){
    //code the function runs
    var area = width * height;
    return area;
}
*/



var calcArea = function(width, height){ //defining function
    //code the function runs
    var area = width * height;
    return area;
}

var a = calcArea(20,30); //Invoking function
console.log(a);