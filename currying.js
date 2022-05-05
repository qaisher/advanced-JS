const buildSandwich = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
        }
    }
}

const mySandwich = buildSandwich("bacon")("lettuce")("tomato");
console.log(mySandwich);

const buildSammy = ingred1 => ingred2 => ingred3=> `${ingred1}, ${ingred2}, ${ingred3}`;

const mySammy = buildSammy("turkey")("cheese")("bread");
console.log(mySammy);

//partially composed
const multiply = (x, y) => x*y;

const curriedMultiply = x => y => x*y;

console.log(multiply(2,3));
console.log(curriedMultiply(4)(3));

const timesTen = curriedMultiply(10);
console.log(timesTen(4));


const addCustomer = fn => (...args) => {
    console.log('saving customer info..');
    console.log(fn(...args));
    return fn(...args);
}

const processOrder = fn => (...args) => {
    console.log(`processing order #${args[0]}`);
    return fn(...args);
}

let completeOrder = (...args) => {
    console.log(`order #${[...args].toString()} completed.`);

}

completeOrder = (processOrder(completeOrder));
completeOrder = (addCustomer(completeOrder));
completeOrder("122");

//requires a function with a fixed number of parameters
const curry = (fn) => {
    return curried = (...args) =>{
        if(fn.length !== args.length){
            return curried.bind(null, ...args);
        }
        return fn(...args);
    };
}

const total = (x,y,z) => x+y+z;

const curriedTotal = curry(total);
console.log(curriedTotal(20)(12)(15));