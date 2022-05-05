let sum  = (...args) => {
    return [...args].reduce((acc, num) => acc + num);
}

const callCounter = (fn) => {
    let count = 0;

    return (...args) => {
        console.log(`Sum has been called ${count +=1} times`);
        return fn(...args);
    }
}

sum = callCounter(sum);
console.log(sum(2,3,9));
console.log(sum(3, 4));
console.log(sum(21, 4));

//check for valid data and number of params

let rectangleArea = (length, width) => {
    return length + width;
}

const countParams = (fun) =>{
    return (...params) => {
        if(params.length !== fun.length) {
            throw new Error(`Incorrect number of parameters for ${fun.name}`);
        }
        return fun(...params);
    }
}

const requireIntegers = (fun) => {
    const name = fun.name;
    return (name, ...params) => {
        params.forEach(param => {
            if(!Number.isInteger(param)){
                throw new TypeError(`Params for ${name} must be integers.`);
            }
        });
        return fun(...params);
    }
}

rectangleArea = countParams(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);
console.log(rectangleArea(12, 21,23));
console.log(rectangleArea(44, 'kld'));

//Async API call function

let requestData = async (url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}

const dataResponseTime = (fn) => {
    return async (url) => {
        console.time('fn');
        const data = await fn(url);
        console.timeEnd('fn');
        return data;
    }
}

const myTestFunction = async () => {
    requestData = dataResponseTime(requestData);
    const data = await requestData('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
}

myTestFunction();