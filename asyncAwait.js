/*const initApp = async () => {

}

document.addEventListener('DOMContentLoaded', initApp);

const multiplyBy10 = (num) => {
    return num*10;

}
*/

const ids = [1,2,3,4,5,6,7,8,9,10];

const initApp = async () => {
    getPostSerialized(ids);
}

document.addEventListener('DOMContentLoaded', initApp);

const getPost = async (id) => {
    return await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();
}

/*const useForEach = (ids) => {
    ids.forEach(async (id) =>  { const data = await getPost(id);
    console.log(data);
});

console.log("not waiting")
}*/

const getPostSerialized = async (ids) => {
    /*for( let i = 0; i<ids.length; i++){
        const data = await getPost(ids[i]);
        console.log(data);
    }
    for (const id of ids) {
        const data = await getPost(id);
        console.log(data);
    }
    console.log('wait on you.');*/
    await ids.reduce(async (acc, id) => {
        //waits for the previous item to complete
        await acc;
        //get the next item
        const post = await getPost(id);
        console.log(post);
    }, Promise.resolve());
    console.log('wait on you.');
}

const getPostConcurrently = async (ids) => {
    const posts = await Promise.allSettled(ids.map(async (id) => getPost(id)));
    console.log(posts);
    console.log("wait on you");
}