let score ="33abc"
console.log(typeof score) 
console.log(typeof (score)) // as a method

let valueInNumber = Number(score)
console.log(typeof valueInNumber); //Output:number

//33abc is not a number
console.log(valueInNumber) //Output:NaN



let result = null
let checkResult = Number(result)
console.log(typeof checkResult);//Output:number
console.log(checkResult);//Output:0



let weather = undefined;
let checkweather = Number(weather)
console.log(checkweather);//Output: NaN



let injured = true;
let checkInjured = Number(injured)
console.log(checkInjured);// Output: 1


// "33"=>33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "Shub" => true; "" => false

let n = 33
let stringNumber = String(n);
console.log(typeof stringNumber); // Output: string
console.log(stringNumber);// Output: 33


