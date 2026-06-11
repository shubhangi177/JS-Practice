const arr= [1,2,3,4]
for(const num of arr){
    console.log(num);
}
let s = "Hello World"
for(let st of s){
    console.log(`Each char is ${st}`);
    
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('IN', "India")
map.set('Fr', "France")
//console.log(map);

for(const key of map){
    //console.log(key);
}

for(const[key, value] of map){
    //console.log(key+":-"+value);
}

const myObject ={
    'game1':'ringa ringa roses',
    'game2': 'hide and seek'
}
for(const[key, value] of myObject){ //Object is not iterable
    console.log(key+":-"+value);
}