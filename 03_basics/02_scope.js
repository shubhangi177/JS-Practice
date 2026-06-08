let a = 22
const b = 4
var c = 55

if(true){
    let a = 10
    const b = 44
    console.log(a);
    
    c = 43
}
console.log(a);
console.log(b);

console.log(c);

function one(){
    const username = 'shubh'
    function two(){
        const website ="yt"
        console.log(username);
        
    }
    //two()
}
//one()

if(true){
    const username ="shubh"
    if(username=="shubh"){
        const website ="yt"
        console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);


//+++++++++++++++++++++++++ intresting +++++++++++++++++++++++++++++++++++
console.log(addone(4));
function addone(num){
    return num+1
}
addtwo(5)
const addtwo = function(num){
    return num+2
}