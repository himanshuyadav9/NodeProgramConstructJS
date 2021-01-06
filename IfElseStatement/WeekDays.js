const readline = require('readline');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

read.question('enter the number for week Day',(number) =>{
if(number == 1){
        console.log("Sunday");
}
else if(number == 2){
        console.log("Monday");
}
else if(number == 3){
        console.log("Tuesday");
}
else if(number == 4){
        console.log("Wednessday");
}
else if(number == 5){
        console.log("Thursday");
}
else if(number == 6){
        console.log("Friday");
}
else if(number == 7){
        console.log("Saturday");
}
else{
        console.log("You have enter wrong number");
}
read.close();
});