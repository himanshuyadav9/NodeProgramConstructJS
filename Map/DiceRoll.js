var diceRoll = new Map();
diceRoll.set( 1 , 0 );
diceRoll.set( 2 , 0 );
diceRoll.set( 3 , 0 );
diceRoll.set( 4 , 0 );
diceRoll.set( 5 , 0 );
diceRoll.set( 6 , 0 );

while (1) {
    var key = Math.floor((Math.random() * 6) + 1);
    var value = diceRoll.get(key);
    value++;
    diceRoll.set(key , value);
    if (value == 10) {
        break;
    }
}
var minValue=10;
for (let [key, value] of diceRoll){
	if( value == 10 )
		var maxKey = key;
	if( minValue > value ){
		var minKey = key;
		minValue = value;
	}
}
console.log("Max Dice coming number=" + maxKey);
console.log("Min Dice coming number=" + minKey);