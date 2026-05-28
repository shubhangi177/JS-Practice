//array

const nums = [0,1,2,3,4]
const names = ["shaam", "raam"]

const arr = new Array(1,2,3,4)
console.log(arr[0]);


//arr.push(4)
//arr.pop()
console.log(arr);

arr.unshift(9) // adds element at 0th index
arr.shift(7) //// removes element at 0th index
console.log(arr);

console.log(arr.includes(1));
console.log(arr.indexOf(1));

const newArr = arr.join() 
console.log(arr);
console.log(typeof newArr);

//slice, splice

console.log("A ", arr)

const a1 = arr.slice(1,3) 
console.log("slice: ",a1);
console.log("B ", arr)

const a2 = arr.splice(1,3)
console.log("splice: ",a2);
console.log("C ", arr)

//slice --> does not take end index, DOES NOT affect original array
//splice --> takes end index,DOES affect original array  