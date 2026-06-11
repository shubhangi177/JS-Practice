const coding = ["js", "ruby","java","python"]

coding.forEach(function (val){
    console.log(val);
})

coding.forEach((item)=>{
    console.log(item);
    
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe) //pass reference of function

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"ipynb"
    },
    {
        languageName:"C++",
        languageFileName:"cpp"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})