/*
- async wait >> promise chains >> callback hell

# Sync in js
a. Synchronous:
- It means the code runs in a particular sequence of instructions given in the program, Each instruction waits for the previous instruction to complete its execution.
b. Asynchronous:
- Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI.
- Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.
*/

// ex of synchronous programming
console.log("one");
console.log("two");
console.log("three");

// ex of asynchronous program
function hello(){
    console.log("Hello!");
}

console.log("log1");
console.log("log2");
console.log("next line setTimeout");
setTimeout(hello, 1000);
console.log("code after setTimeout");
console.log("log3");

/*
# Callbacks
- It is a function passed as an argument to another function.

# Callback hell:
- Nested callbacks stacked below one another forming a pyramid structure(pyramid of doom)
- This style of programming becomes difficult to understand and manage.
*/
// eg:
function sum(a, b){
    console.log(a+b);
}
function calculator(a, b, sumCallback){
    sumCallback(a, b);
}
calculator(3,4, sum);

const hello1 = () => {
    console.log("hello!");
}
setTimeout(hello1, 1000); //this is also a callback

// this function is printing data one by one in every 2 sec
// data1 -> wait(2s) -> data2 -> wait(2s) -> data3 .....
function getData(dataId, getNextData){
    setTimeout(() => {
        console.log(dataId);
        if (getNextData){
            getNextData();
        }
    }, 1000);
}
// example of callback hell
getData(2, () => {
    getData(4, () => {
        getData(6);
    });
});

/*
# Promises
- Promise is for "eventual" completion of task. It is an object in js.
- It is a solution to callback hell.
        let promise = new Promise((resolve, reject) => {...})
- resolve and reject are callbacks provided by js

- promises
    - Pending
    - Fulfilled
    - Reject
*/

let promise1 = new Promise(function(resolve, reject){
    // Do an async task
    // DB call, crptography, network
    setTimeout(() => {
        console.log("some Async task is completed");
        resolve() //connecting with .then()
    }, 2000);
})

// .then() > has connection with the resolve
promise1.then(function(){
    console.log("promise consumed"); 
})

new Promise(function(resolve, reject){
    console.log('Async task 2');
    resolve()
}).then(function(resolve, reject){
    console.log('Async 2 task resolved');
})

// passing value using resolve
let promise03 = new Promise(function(resolve, reject){
    setTimeout(() => {
        user = {username: "anuj", email: "anuj@example.com"};
        resolve(user);
    }, 2000);
})
promise03.then(function(user){
    console.log(user);
})

// 
let promise04 = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if (!error){
            resolve({username: "anuj", password: '123'});
        }
        else{
            reject("ERROR: Something went wrong");
        }
    }, 1000);
})
promise04.then((user)=> {
    console.log(user);
    return user.username;;
}).then(function(username){
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(function(){
    console.log(('The promise is either resolved or rejected'));
})

// 
let promise05 = new Promise(function(resolve, reject){
    setTimeout(() => {
      let error = true;
      if (!error){
        resolve({username: 'promise05', password: '123'});
      }  
      else{
        reject("Some error has been occured");
      }
    }, 1000);
})