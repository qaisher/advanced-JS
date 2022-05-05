//Lexical scope

let x = 1;

const parentFunction = () => {
    //local scope
    let myValue = 2;
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
        console.log(x += 5);
        console.log(myValue +=1);
    }

    return childFunction;
}

const result = parentFunction();

result();
result();
console.log(x);

//IIFE

const privateCounter = (() => {
    let count = 0;
    console.log(`initial value: ${count}`);
    return () => { count += 1; console.log(count) }
}
)();

privateCounter();
privateCounter();
privateCounter();

const credits = ((num) => {
    let credits = num;
    console.log(`initial credits value: ${credits}`);
    return () => {
        credits -= 1;
        if(credits > 0)
        console.log(`playing game, ${credits} credit(s) remaining`);
        if(credits <= 0)
        console.log('not enough credits');
    }
})(3);

credits();
credits();
credits();