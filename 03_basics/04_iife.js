//Immediately Invoked Function Expressions (IIFE)
// Used to avoid polluting the global scope.
(function chai(){
    //named iife
    console.log("DB CONNECTED");
})();

// ( () => {
//     console.log("DB TWO CONNECTED");
    
// } )()
( (name) => {
    console.log(`DB TWO CONNECTED ${name}`);
    
} )("shubh")

//to execute two iife consecutively then add ';' after first iife