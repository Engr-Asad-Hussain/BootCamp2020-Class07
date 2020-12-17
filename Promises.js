/*
    [x] Example of Promise
    [x] Promise is an Asynchronous
    [x] Means it creates a new thread in memory and run steps there mean while javascript compile rest of the code.
*/

const dummyAPI = () => {
    return( (Math.floor((Math.random() * 10)) % 2 == 0 ) ? true : false);
}

const resolveFunction = () => console.log('success');
const rejectFunction = () => console.log('failure');

const result = new Promise( (resolve, reject) => {
    setTimeout( ()=> ( dummyAPI() ? resolve() : reject() ), 2000)
});
/*
    setTimeout( ()=>{}, 2000) => This function ()=>{} will execute after 2000milliseconds
    [x] This is the purpose of setTimeout()
    [x] Example;
    [x] setTimeout("Hello World", 2000) Means Hello World will print after 2 seconds
    [x] setTimeout( dummyAPI(), 200) Means dummyAPI() will run after 200 milliseconds
*/
result.then(resolveFunction).catch(rejectFunction)
/*
    The above statement is like:
    if (promise fullfulled) then do resolveFunction()
    else catch the error and run rejectFunction()
*/
console.log("Hello World");



/*
function CheckUserPromise(userInput) {
    new Promise(function(resolve, reject) {
        
            [x] If promise fulfilled resolve() will executed => checkUserPromise = resolve()
            [x] If promise not fulfilled reject() will executed => checkUserPromise = reject()
        
        
            [x] we create new instance using keyword: new
            [x] We pass 2 functions as a parameter of Promise
        
       if (userInput) {
           resolve();
       }
       else {
           reject()
       }
    });
}
CheckUserPromise(true);

*/