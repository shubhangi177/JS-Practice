const tinderUser = new Object()

tinderUser.id = "122user"
tinderUser.name="sammy"
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const uberUser ={
    email : "shubh@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shubh",
            lastname: "pandey"
        }
    }
}
console.log(uberUser.fullname.userfullname.lastname);
console.log(uberUser.fullname?.userfullname.lastname); // to check if fullname exists or not in api responses

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id : 1919,
        name:"shshu"
    },
    {
        id : 1919,
        name:"shshu"
    },
    {
        id : 1919,
        name:"shshu"
    },
    {
        id : 1919,
        name:"shshu"
    },
]
console.log(users[1].name);
 
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course ={
    coursename:"js in english",
    price: "999",
    courseInstructor:"shubh"
}

//course.courseInstructor

//const {courseInstructor} = course
//console.log(courseInstructor);

const {courseInstructor:instructor} = course
console.log(instructor);

//object destructuring in react
// const navbar= ({company})=>{

// }
// navbar(company="shubh")

//api
//json
// {
//     "name":"shubh",
//     "coursename":"english",
//     "price":"free"
// }

[
    {},
    {},
    {}
]