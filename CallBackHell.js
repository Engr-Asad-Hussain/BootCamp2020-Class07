/*
  [x] Example of Asynchronous Programming
  [x] Example of Callback functions
  [x] This example creates callback hell.
*/

function printGreetings(message, Greet) {
  if (message === 'evening') {
    Evening(Greet);
  } 
  else if (message === 'morning') {
    Morning(Greet);
  }
  else {
    Night(Greet);
  }
}

function Morning(Greet) {
  console.log("Good Morning");
  Greet('Hello World');
}

function Evening(message) {
  console.log("Good Evening");
  Greet('Hello World');
}

function Night(message) {
  console.log("Good Night");
  Greet('Hello World');
}

function Greet(text) {
  console.log(text);
}

printGreetings("morning", Greet)