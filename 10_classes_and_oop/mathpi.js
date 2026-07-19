const descripter1 = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter1);

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);

const fan = {
    model:"a1fan",
    price: 1000,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(fan,"price"));

Object.defineProperty(fan,'price',{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(fan,"price"));
//console.log(fan);
for(let [key, value] of Object.entries(fan)){
    console.log(`${key}:${value}`);
    
}