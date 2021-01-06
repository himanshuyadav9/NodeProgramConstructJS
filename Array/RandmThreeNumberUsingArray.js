var numberArray = new Array();
for ( let i = 0 ; i < 10 ; i++ ){
	numberArray[i] = (Math.floor( 100 + Math.random() * 900 ));
	console.log(numberArray[i]);
}
var max = numberArray[0];
var prevMax = max;
for( let i = 0 ; i < 10 ; i++ ){
	if ( max < numberArray[i] ){
		prevMax = max;
		max = numberArray[i];
	}
	else if ( prevMax < numberArray[i] ){
	prevMax = numberArray[i];
	}
}
console.log("second max " + prevMax);

var min = numberArray[0];
var prevMin = min;
for(let i=0;i < 10 ; i++ ){
	if (min > numberArray[i] ){
		var prevMin=min;
		min=numberArray[i];
	}
	else if (prevMin > numberArray[i] ){
		prevMin=numberArray[i];
	}
}
console.log("second min " + prevMin);