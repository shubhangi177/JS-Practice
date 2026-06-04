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
