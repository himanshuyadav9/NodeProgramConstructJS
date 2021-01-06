let isleap="false"
let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter Year ",(year) =>{
if(year%400 == 0){
	console.log("leap year");
}
else if((year%100 != 0) && (year%4 == 0)){
	console.log("leap year");
}
else{
	console.log("not a leap year");
}
prompts.close()
});
