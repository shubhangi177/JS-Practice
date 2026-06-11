//for in
const myObject = {
    js:'javascript',
    cpp:'C++',
    ipynb:'Python'
}

for(const key in myObject){
    console.log(key);
}
for(const key in myObject){
    console.log(myObject[key]);
}
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["java", "html", "CSS", "js"]
for(const s in programming){
    console.log(programming[s]);
}


//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('IN', "India")
map.set('Fr', "France")
//console.log(map);

for(const key in map){// maps are not itertable in for in
    console.log(key);
}
