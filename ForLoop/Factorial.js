let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
 prompts.question('enter the number',(number) => {
    var factorial = 1 ;
    for(var i = number ; i > 1 ; i-- ){
	factorial*=i;
    }   
    console.log(number+" factorial="+factorial);
    prompts.close()
});