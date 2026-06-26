const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
    
//     return acc+currval
// },0)
const myTotal = myNums.reduce((acc, curr) => acc+curr,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName:'Mob Dev Course',
        price:6999
    },
    {
        itemName:'Web Dev Course',
        price:4999
    },
    {
        itemName:'Data Science Course',
        price:12999
    },
]
const pricetopay= shoppingCart.reduce((acc, itemName)=>acc+itemName.price,0)
console.log(pricetopay);
