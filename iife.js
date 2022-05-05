//iife
(function myIIFE () {
    num++;
    console.log(num);
    return num !==5? myIIFE(num) : console.log('finished');
}) (num=0);


//global
const x = 'whatever';
const helloWorld = () => "hello world";

//isolate declarations within the function
(() => {
    const x = 'iffe';
    const helloWorld = () => 'hello iffe';
    console.log(x);
    console.log(helloWorld());
})();

console.log(x);
console.log(helloWorld());

////////

const increment = (() => {
    let counter = 0;
    console.log(counter);
    const credits = (num) => console.log(`I have ${num} credit(s)`);
    return() => { counter++;
    credits(counter);
    }
})();

increment();
increment();
//credits(3);

//module pattern
const score = (() => {
    let count = 0;
    return {
        current: ()=> {return count;},
        increment: () => {count++;},
        reset: () => { count = 0;}
    }
})();

score.increment();
console.log(score.current());
score.increment();
console.log(score.current());
score.increment();
console.log(score.current());

//Revealing pattern a variation of module pattern
const game = (() => {
    let count = 0;
    const current = () => { return `Game score is ${count}`};
    const increment = () => {count++};
    const reset = () => { count = 0};
    
    return {
        current: current,
        increment: increment,
        reset: reset
    }
})();

game.increment();
console.log(game.current());

//injecting a namespace object
((namespace) => {
    namespace.count = 0;
    namespace.current = function() { return `App count is ${this.count}`};
    namespace.increment = function () { this.count++};
    namespace.reset = function() {this.count = 0};
})(window.App = window.App || {});

App.increment();
console.log(App.current());