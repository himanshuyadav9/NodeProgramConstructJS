let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question('enter the number',(number) => {
    for(var i = 1 ; i <= number ; i++ ){
        console.log("1/"+i);
    }
    prompts.close()
});