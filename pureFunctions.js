//impure function
let x = 1;
const increment = ()=> x+=1;
console.log(increment());
console.log(x);

const arr = [3,4,2];
const addToArr = (arr1, toAdd) => {
    arr1.push(toAdd);
    return arr1;
}

console.log(addToArr(arr, 5));
console.log(arr);

//refactored examples
const pureIncrement = (num) => num+=1;
console.log(pureIncrement(x));
console.log(x);


const pureAddToArr = (arr, data) => [...arr, data];
console.log(pureAddToArr((arr), 34));
console.log(arr);


//higher order functions
const oneToFive = [1,2,3,4,5];
const oddToFive = oneToFive.filter(elemt => elemt%2 !== 0);
console.log(oddToFive);