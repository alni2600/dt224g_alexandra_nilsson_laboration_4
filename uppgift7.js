// Lösning till uppgift 7. Av Alexandra Nilsson, 2026

"use strict";

//skapar array med sex tal (ändrade till const istället för let efter att ha läst på lite mer om let och const)
const numberArray = [9, 3, 7, 3, 8, 2];

//skapar funktion som returnerar totalsumman när den anropas
function calculateSum (anyArray){
    //sum har ett startvärde, 0
    let sum = 0;

    //här loopas alla enskilda element i arrayen igenom och adderas till totalsumman
    //(jag ändrade till "sum += item" istället för "sum = sum + item". En liten förbättring)
    anyArray.forEach(item => {
        sum += item;
    });
    //den totala summan är funktionens returvärde
    return sum;
}

//anropar funktionen med numberArray som argument och skriver ut summan.
console.log(calculateSum(numberArray));