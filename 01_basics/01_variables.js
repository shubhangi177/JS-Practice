const accountID = 1221
let accountEmail = "shub@google.com"
var accountPassword ="12345"
/*
Prefer not to use var
bcoz if issue in block scope and functional scope
*/
accountCity = "jaipur"
let accountState;
//accountID = 2   //not allowed
accountEmail ="abs@gmail.com"
accountPassword ="23232"
accountCity="Hyd"
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);
