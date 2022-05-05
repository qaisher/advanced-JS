let arr1 = [];
console.log(arr1.length);

console.log(arr1.length? true : false);

arr1 = undefined;

console.log(arr1 && arr.length? true : false);

//optional chaining
let arr2 = [];
console.log(arr2?. length? true: false);

let arr3 = [{"id": 1}];
console.log(arr3?.[0]?.id ? true:false);

console.log(arr3?.[0]?.name ? true:false);

//null coalescing operator
console.log(arr3?.[0]?.id ?? "No id property");

console.log(arr3?.[0]?.name ?? "No name property");

console.log(Array.isArray(arr3) && arr3.length? true:false);



