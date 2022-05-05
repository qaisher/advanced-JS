const initApp = async() => {
    const memoizedMultiply10 = memoize(multiplyBy10);
    console.log(memoizedMultiply10(10));
    console.log(memoizedMultiply10(10));
    console.log(memoizedMultiply10(10));
    console.log(memoizedMultiply10(5));
    console.log(memoizedMultiply10(5));
    
    
    const memoizedAdd3 = memoize(add3);
    console.log(memoizedAdd3(3, 4,2));
    console.log(memoizedAdd3(3, 4,2));
    console.log(memoizedAdd3(3, 4,2));
    console.log(memoizedAdd3(5, 3, 6));
    console.log(memoizedAdd3(5, 3, 6));

    const memoizedAddMany = memoize(addMany);
    console.log(memoizedAddMany(3, 4,2, 8));
    console.log(memoizedAddMany(3, 4,2, 8));
    console.log(memoizedAddMany(3, 4,2, 8));
    console.log(memoizedAddMany(1, 3, 2, 7, 8));
    (memoizedAddMany(1, 3, 2, 7, 8));


    const memoizedFib = memoize(fib);
    console.log(memoizedFib(40));
    console.log(memoizedFib(40));
    console.log(memoizedFib(40));
}

document.addEventListener('DOMContentLoaded', initApp);

const multiplyBy10 = (num) => {
    return num*10;
}
/*
const memoizedMultiply10 = (num) => {
    const cache ={};

    return (num) => {
        if(num in cache){
            console.log(cache);
            return cache[num];
        }
        const result = num*10;
        cache[num] =result;
        return result;
    }
}*/

const add3 = (num1, num2, num3) => {
    return num1+num2+num3;
}

const addMany = (...args) => {
    return [...args].reduce((acc, num) => acc+num);
}

const memoize = (fn) => {
    const cache = {};
    return (...args) =>{
        if(args.toString() in cache){
            console.log(cache);
            return cache[args.toString()];

        }

        const fib = (pos)=> {
            if(pos<2) return pos;
            return fib(pos-1)+fib(post-2);
        }
        const result = fn(...args);
        cache[args.toString()] = result;
    }
}