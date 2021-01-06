let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
 prompts.question('enter the number for unit place',(number) => {
if(number == 1){
        console.log("unit");
}
else if(number == 10){
        console.log("ten");
}
else if(number == 100){
        console.log("hundred");
}
else if(number == 1000){
        console.log("thousand");
}
else if(number == 10000){
        console.log("ten thousand");
}
else{
        console.log("You have enter wrong number");
}
prompts.close()
});