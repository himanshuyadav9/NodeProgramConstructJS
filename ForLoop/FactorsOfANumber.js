let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
 prompts.question('enter the number',(number) => {
    var tempNumber=number;
    console.log("1");
    for( var i = 2 ; i <= number ; i++ ){
	    if( tempNumber % i == 0 ){
		tempNumber = tempNumber / i ;
		console.log(i);
		i--;
	    }
    }
    console.log(number);
    prompts.close()
});