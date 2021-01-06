let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter Number ",(number) =>{
if(number == 1){
	console.log("one");
}
else if(number == 2){
	console.log("two");
}
else if(number == 3){
	console.log("three");
}
else if(number == 4){
	console.log("four");
}
else if(number == 5){
	console.log("five");
}
else if(number == 6){
	console.log("six");
}
else if(number == 7){
	console.log("seven");
}
else if(number == 8){
	console.log("eight");
}
else if(number == 9){
	console.log("nine");
}
else{
	console.log("you have enter the wrong no.")
}
prompts.close()
});
