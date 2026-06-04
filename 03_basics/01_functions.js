function addTwoNumbers(number1, number2){
    return number1+number2;
}
const result = addTwoNumbers(2,5)
console.log(result);

function loginUserName(username="shu"){
    if(username == undefined){ // or if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//let res = loginUserName("shubh")
//console.log(res);

console.log(loginUserName());//undefineed

function calculateCartPrice(val1, val2,...nums1){// rest operator(combines values in array)
    return nums1
}
console.log(calculateCartPrice(200, 400, 500,2000));

const user = {
    username: "shub",
    price: 200
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "sita",
    price:1999
})

const arr = [2,3,4,5]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(arr));
console.log(returnSecondValue([1,4,6,2]));

