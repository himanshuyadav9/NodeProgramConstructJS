let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question('enter the number',(number) => {
    var result = 0;
    for(var i = 1 ; result <= Math.pow( 2 , number -1 ) ; i++ ){
	    result = Math.pow(2,i);
	    console.log("2^"+i+"="+result);
    }
    prompts.close()
});