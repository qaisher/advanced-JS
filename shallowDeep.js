let x = 2;
let y = x;
y += 1;
console.log(y);
console.log(x);

//structural data type uses reference
let arr1 = [1, 2, 3,4];
let arr2 = arr1;
arr2.push(8);
console.log(arr1);


//mutable vs immutable

//primitive are immutable
let name = 'qaisher';
name[0] = 'k'; //immutable
console.log(name);

//reassignment
name = 'kaishar';
console.log(name);

//structures

arr2[0] = 2;
console.log(arr1);


//impure function
const addToScore = (arr, score) => {
    arr.push(score);
    return arr;
}

const scoreArr = [2,6];
console.log(addToScore(scoreArr, 7));


//shallow copy vs deep copy

//shallow copy

//with spread operator
const arr3 = [...arr2, 13];
console.log(arr3);
console.log(arr2);

console.log(arr1 === arr2);

const arr4 = [...arr3];
console.log(arr4);
console.log(arr3 === arr4);

//with Object.assign()
const arr5 = Object.assign([], arr4);
console.log(arr5);
console.log(arr5 === arr4);

//nested arrays or objects
arr5.push([1,2]);
const arr6 = [...arr5];
console.log(arr6);
arr6[6].push(14);
arr6.push(8);
console.log(arr6);
console.log(arr5);
console.log(arr4);

//object.freeze
const scoreObj = {
    "first": 12,
    "second": 5,
    "third": {"a": 1, "b": 2}
}

Object.freeze(scoreObj);
scoreObj.third.a = 0;
console.log(scoreObj); //still mutates



//deep copy
const deepClone = (obj) => {
    if(typeof obj !== "object" || obj === null)
    return obj;

    const newObject = Array.isArray(obj)? [] :{};

    for(let key in obj){
        const val = obj[key];
        newObject[key] = deepClone(val);
    }
    return newObject;

}

const newScoreArr = deepClone(scoreArr);
console.log(newScoreArr);
console.log(newScoreArr === scoreArr); //created a deep clone

const myScoreObj = deepClone(scoreObj);
console.log(myScoreObj);
console.log(myScoreObj === scoreObj); //created a deep clone


//pure function
const addToScorePure = (arr7, scoreToAdd, cloneFunc) => {
    const addedScoreArr = cloneFunc(arr7);
    addedScoreArr.push(scoreToAdd);
    return addedScoreArr;
}

const newAddedScore = addToScorePure(scoreArr, 21, deepClone);

console.log(newAddedScore);
console.log(scoreArr);