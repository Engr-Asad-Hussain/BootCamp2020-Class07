## Asynchronous JavaScript


### Synchronous Programming:
- Javascript is a synchronous programming language.
- Synchronously means means in a sequence that is one by one.
- It means that every statement is executed line by line that is, compiler compiles the first statement then executes it then next line then execute, then third line and executes it and so on so forth.


### Drawback in Synchronous Programming:
- For example;
```
1. console.log("Starting of Program")
2. console.log("Lets start the program")
3. for (var i=0; i<=100000000; i++) {
    console.log(i)
}
4. console.log("For loop is ended")
5. console.log("Program's mid")
6.
7.
```
- Now, What happens in synchronous programming, line 1 and 2 will execuet in a very short time but this for loop will print till 100000000 and may be this takes some time to print all these numbers. Then after completing, compiler compiles line 4 and 5 and so on.
- So, due to this for loop we have some delay in an execution which degrades the performance of an application.
- So, this problem is resolved by "asynchronous programming"
- This is just an example, what we do in real life is: we want to fetch data from particular server using API so fetching data takes some time.


### Asynchronous Programming:
- We are telling to the compiler that you have to execute this statement(line: 3) in another thread of a memory. Don;t stop on line: 3 for its completion right now you have execute line 4 and 5 and so on... When that line:3 gets finished then we will print that for loop.
- Mtlb yeh process hota rahe memory ke kisi or thred pr, kisi or hissy main. Abhi ruke nahi age ke steps ko execute kro but hamara kaam rukna nahi chahiye agly steps ko execute krna hia foran.
- For example facebook per bht sari chezain lood ho rahi hoti hain tw wo sari chezain ek sath kaise load hojati hain? because they are using asynchronous programming.
- Fetching data from the server using API is done through asynchronously.


### Methods in Asynchronous
- There are different methods we can use for asynchronous progamming.
- Here we will use 2 methods
  1. callback functions
  2. promises


### Callback functions
- functions with in a functions.
- Means when 1 function completes its job, it calls another function, and this function calls another function.
- We use callback functions when we have to do API request.
- **View**: [https://github.com/Engr-Asad-Hussain/BootCamp2020-Class07/blob/master/Callback.js](CallBack.js)
- **Drawback of Callback**: It makes a callback hell: means we are unable to understand which function calls another function and so on... So, it makes code hell. It creates unstability in management.
- **View**: [https://github.com/Engr-Asad-Hussain/BootCamp2020-Class07/blob/master/CallBackHell.js](CallBackHell.js)


### Promises
- To get rid of callback we use Promises.
- Promise is like a promise, either it completes (wada pura hoga) or it will not complete (wada pura nahi hua).
- So, in javascript if the promises completes then we called it as resolve() and if it not completes we called it as reject()
- We usually use Promises to fetch data from API, so javascript tells that if I would be able to fetch data successfully then I'll run resolve() function else I'll run reject()
- **View:** (https://github.com/Engr-Asad-Hussain/BootCamp2020-Class07/blob/master/BeforePromises.js)[BeforePromises.js] and [https://github.com/Engr-Asad-Hussain/BootCamp2020-Class07/blob/master/Promises.js](Promises.js) and [https://github.com/Engr-Asad-Hussain/BootCamp2020-Class07/blob/master/AfterPromises.js](AfterPromises.js)


### then tree
- **view:** [https://github.com/Engr-Asad-Hussain/BootCamp2020-Class07/blob/master/AfterPromises.js](AfterPromises.js)


### setTimeout()
```
function print() {
    console.log("Print Logo");
}
setTimeout(print, 2000);
```
- It calls print() function after 2 seconds.


### ```setTimeout( ()=> ( dummyAPI() ? resolve() : reject() ), 2000) });```
- setTimeout( ()=>{}, 2000) => This function ()=>{} will execute after 2000milliseconds
- Example;
    1. setTimeout("Hello World", 2000) Means Hello World will print after 2 seconds
    2. setTimeout( dummyAPI, 200) Means dummyAPI() will run after 200 milliseconds

