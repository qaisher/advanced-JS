//without recursion

const fibonacci = (num, arr = [0, 1]) => {
    while(num>2){
        const [nextToLast, last] = arr.slice(-2);
        arr.push(nextToLast + last);
        num--;
    }
    return arr;
}

console.log(fibonacci(10));

//with recursion
const fib = (num, arr = [0, 1]) =>{
    if(num<=2) return arr;
    const [nextToLast, last] = arr.slice(-2);
    return fib(num - 1, [...arr, nextToLast+last]);
}
console.log(fib(10));


//real-life examples
const getAWSProductIdImages = async () =>{
    if(data.IsTruncated){
        return await getAWSProductIdImages(
            productId,
            s3,
            resultArray,
            data.NextContinuationToken
        );
    }
    return resultArray;
}

//2

const artistByGenre = {
    jazz: ["Miles Davis", "John Cena"],
    rock: {
        classic: ["Bob Marley", "Eagle Gang"],
        hair: ["Leo", "Python", "Poison"],
        alt: {
            classic: ["Pearl Jam", "The Killers"],
            current: ["Shockwave", "Sir Slay"]
        }
    },
    unclassified: {
        new: ["Camp", "Forever Young"],
        classic: ["Seal", "Morcheema", "Chris"]
    }
}

const getArtistNames = (dataObj, arr3 = []) => {
    Object.keys(dataObj).forEach(key => {
        return dataObj[key].forEach(artist => {
            arr.push(artist);
        });
    }
        getArtistNames(dataObj[key], arr3);
        });
    return arr3;
}

console.log(getArtistNames(artistByGenre));