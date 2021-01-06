let origDogs = ["Bubble","Beagle", "Lebrador"];
let cats = new Array("Americal Carl", "Bengal");
let birds = new Array("Falcons", "Ducks", "crow");

//Copying Array Elements
let slicedDogs = origDogs.slice(1, 2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

//Stack Function LIFO push and pop
let pushDog = dogs.push("pug");
let popDog = dogs.pop();

//abbd and remove (where, how many to remove, element list)
dogs.splice(2, 1, "pug", "Boxer");

//Array Function - concat, slice and sort
let animals = dogs.concat(cats, birds);
let newAnimal = [...dogs, ...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first, second]){
    console.log("Scaan:" + first + " " + second);
}
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = "";
for(let animal of animals) allAnimals += animal + " ";
console.log("Animals" + allAnimals);