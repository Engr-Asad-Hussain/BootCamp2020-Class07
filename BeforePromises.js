/*
    [x] Before Promise
    [x] prototype of promise: means what promise do is like this example.
*/
function success() {
    console.log('success');
}

function failure() {
    console.log('failure');
}

function checkString(inputUser, success, failure) {
    inputUser === true ? success() : failure();
}

checkString(false, success, failure);
/*
    [x] if I pass true then it runs success function, If I pass false
        it runcs failure function.
*/