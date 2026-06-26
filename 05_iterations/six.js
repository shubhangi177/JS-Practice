const myNums =[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=> {
//     return num>4
// })
// console.log(newNums);

const newNums = []
myNums.forEach((num) =>{
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums);

const books = [
    {title:'Book 1', genre:'Fiction', publish:1964, edition: 2004},    
    {title:'Book 2', genre:'Non Fiction', publish:1975, edition: 2009},    
    {title:'Book 3', genre:'History', publish:1988, edition: 2012},    
    {title:'Book 4', genre:'Science', publish:2000, edition: 2023},    
    {title:'Book 5', genre:'History', publish:1944, edition: 2000},    
]

// const userBooks = books.filter((bk) => bk.genre == 'History')
// console.log(userBooks);

const userBooks = books.filter((bk)=> bk.publish<2004 && bk.genre == 'History')
console.log(userBooks);

