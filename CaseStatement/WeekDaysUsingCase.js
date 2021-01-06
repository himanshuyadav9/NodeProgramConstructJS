let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question('enter the number for week Day',(number) =>{
    switch(number){
        case '1':
                console.log("Sunday");
                break;
        case '2':
                console.log("Monday");
                break;
        case '3':
                console.log("Tuesday");
                break;
        case '4':
                console.log("Wednessday");
                break;
        case '5':
                console.log("Thusday");
                break;
        case '6':
                console.log("Friday");
                break;
        case '7':
                console.log("Saturday");
                break;
        default:
                console.log("You have enter wrong option");
        }
    prompts.close()
    });