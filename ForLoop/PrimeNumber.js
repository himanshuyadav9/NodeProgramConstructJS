let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question('enter the number',(number) => {
    if(( number == 1 ) || ( number ==2 )){
        console.log("prime number");
    }
    else{
        for(var i = 3 ; i < number/2 ; i++ ){
            if(number%i==0){
                    console.log("Not a prime number");
                process.exit();
            }
        }
        console.log("prime number");
    }
    prompts.close()
});
