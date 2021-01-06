let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
 prompts.question('enter the number for unit place',(number) => {
    switch(number){
        case '1':
                console.log("Unit");
                break;
        case '10':
                console.log("Ten");
                break;
        case '100':
                console.log("Hundred");
                break;
        case '1000':
                console.log("Thousand");
                break;
        case '10000':
                console.log("Ten Thousand");
                break;
        default:
                console.log("You have enter wrong option");
        }
    prompts.close()
});