var numberArray = new Array();
for ( let loop = 0 ; loop < 10 ; loop++ ){
        numberArray[loop] = (Math.floor( 100 + Math.random() * 900 ));
        console.log(numberArray[loop]);
}
numberArray.sort();
console.log("2nd largest = " + numberArray[numberArray.length - 2 ]);
console.log("2nd smallest = " + numberArray[1]);