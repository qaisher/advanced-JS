const person = {
    alive: true
}

const musician = {
    plays: true
}

musician.__proto__ = person;
console.log(musician.plays);
console.log(musician.alive);

console.log(musician);

//getPrototypeOf and setPrototypeOf

Object.setPrototypeOf(musician, person);
console.log(Object.getPrototypeOf(musician));
console.log(musician.__proto__);
console.log(Object.getPrototypeOf(musician) === musician.__proto__);

//object literals

const person2 = {
    alive: true
}

const musician2 = {
    plays: true
}

Object.setPrototypeOf(musician2, person2);
console.log(musician.plays);
//missing property => go to person

console.log(musician2.alive);

//Extending the prototype chain => general to specific to more specific
const guitarist = {
    strings: 6,
    __proto__: musician2
}

console.log(guitarist.alive);
console.log(guitarist.plays);
console.log(guitarist.strings);
console.log(guitarist);

//getter and setter methods

const car = {
    doors: 2,
    seats: "vinyl",
    get seatMaterial(){
        return this.seats;
    },
    set seatMaterial(material){
        this.seats = material;
    }
}

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = "leather";
console.log(luxuryCar);
console.log(luxuryCar.doors);
console.log(car);

console.log(luxuryCar.valueOf());

//getting the keys of an object

console.log(Object.keys(luxuryCar));

Object.keys(luxuryCar).forEach(key => {
    console.log(key);
});

for(let key in luxuryCar){
    console.log(key);
}

//object constructors

function Animal(species) {
    this.species = species;
    this.eats = true;
}

Animal.prototype.walks = function(){
    return `A ${this.species} is walking`;

};

const Bear = new Animal("bear");
console.log(Bear.species);
console.log(Bear.walks());
//The prototype is where inheritable props and methods are
console.log(Bear.__proto__);
console.log(Bear.__proto__ === Animal.prototype);
console.log(Animal.prototype);
console.log(Bear);

//ES6 classes example of inheritance

class vehicle {
    constructor() {
        this.wheels = 4,
        this.motorized = true
    }
    ready(){
        return "Ready to go!";
    }
}

class motorcycle extends vehicle {
    constructor(){
        super();
        this.wheels = 2
    }

    wheelie(){
        return "On one wheel now";
    }
}

const myBike = new motorcycle();
console.log(myBike.wheels);
console.log(myBike.ready());
console.log(myBike.wheelie);

const myCar = new vehicle();
console.log(myCar);