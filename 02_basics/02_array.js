const barbie =["SnowWhite", "cinderella", "sofia"]
const hero = ["ninja hattori", "doremon", "ben10"]
 
 // barbie.push(hero)
 // console.log(barbie)
 // console.log(barbie[3][1])

//  const allcartoon = barbie.concat(hero)
//  console.log(allcartoon);
 
const allNewcartoon = [...barbie, ...hero] // spread
console.log(allNewcartoon);

const ar1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const ar2 = ar1.flat(Infinity)
console.log(ar2);

console.log(Array.isArray("Shubh"))
console.log(Array.from("Shubh"))
console.log(Array.from({name: "shubh"}));//interesting(empty array is returned)

let marks1 = 40;
let marks2 = 50;
let marks3 = 55;
console.log(Array.of(marks1, marks2, marks3));

