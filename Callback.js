/*
    [x] Example of Asynchronous Programming
    [x] Example of Callback functions
*/
function printGreetings(message, alertGreet) {
  alertGreet(message);
}

function alertGreet(message) {
  alert(message)
}

printGreetings("Hello World", alertGreet);