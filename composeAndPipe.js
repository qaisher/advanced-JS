const add2 = (x) => x+2;
const subtract1 = (x) => x-1;
const multiplyBy5 = (x) => x*5;

const result = multiplyBy5(subtract1(add2(3)));
console.log(result);



const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val);

const compResult = compose(multiplyBy5, subtract1, add2)(3);
console.log(compResult);

const pipe = (...fns) => (val) => fns.reduce((prev, fn) => fn(prev), val);


const pipeResult = pipe(add2, subtract1, multiplyBy5)(5);
console.log(pipeResult);

const pipeResult2 = pipe(
    add2,
    subtract1,
    multiplyBy5
)(4);
console.log(pipeResult2);


//pointer free style

const divideBy = (divisor, num) => num / divisor;

const pipeResult3 = pipe(
    add2,
    subtract1,
    multiplyBy5,
    x => divideBy(2, x)
)(5);
console.log(pipeResult3);

//curry style
const divBy = (divisor) => (num) => num / divisor;
const divideBy2 = divBy(2); //partially applied

const pipeResult4 = pipe(
    add2,
    subtract1,
    multiplyBy5,
    divideBy2
)(5);
console.log(pipeResult4);

//some examples beyond math function

const lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid corporis officiis tenetur tempora omnis, incidunt esse dolore nulla voluptas rerum accusamus vel distinctio nostrum provident adipisci doloribus repellat rem tempore."

const splitOnSpace = (string) => string.split(' ');
const count = (array) => array.length;

const wordCount = pipe(
    splitOnSpace,
    count
);
console.log(wordCount(lorem));

//pipe function is reusable
const asf = "Every good b";
console.log(wordCount(asf));

const pal1 = "taco cat";
const pal2 = "UFO tofu";
const pal3 = "dave";

const split = (string) => string.split('');
const join = (string) => string.join('');
const lower = (string) => string.toLowerCase();
const reverse = (array) => array.reverse();

const fwd = pipe(
    splitOnSpace,
    join,
    lower
);

const rev = pipe(
    fwd,
    split,
    reverse,
    join
);

console.log(fwd(pal1) === rev(pal1));
console.log(fwd(pal2) === rev(pal2));
console.log(fwd(pal3) === rev(pal3));