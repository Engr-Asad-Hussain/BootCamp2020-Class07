/*
    [x] We can make then-tree
    [x] whatever 1st then returns that becomes the argument of 2nd then
    [x] whatever 2nd then returns that becomes the argument of 3rd then
*/
console.log("Program Starts:::");

const success = () => { console.log("Success"); }
function failure() { console.log("Failure"); }

const result = new Promise( (resolve, reject)=>{
    setTimeout( ()=>{
        resolve();
    },2000)
});
result.then( function() {
    console.log("First \"then\" value = " + 10);
    return 10;
})
.then( (arg)=>{
    console.log("Second \"then\" value = " + arg);
    return arg + 10;
})
.then( (arg)=>{
    console.log("Third \"then\" value = " + arg);
})
.catch(failure);

console.log("Program Statements");
console.log("Program Description");
console.log("Program logs");
console.log("Program Ends:::");