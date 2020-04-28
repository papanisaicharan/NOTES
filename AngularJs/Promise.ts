// Promise are a far cleaner solution to write asynchronous code than callbacks
// with catch handler it also gives us a single place where we can handle errors

const hasError = true;

function doAsyncTask(){
  let promise  = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task callback");
        if(hasError){
            reject("Error");
        }else{
            resolve("Success")
        }
    },1000);
  });
  return promise;
}

doAsyncTask().then(
    (Val) => console.log(Val),// for resolve
    (Val) => console.log(Val) // for error
);

// line 26 gets executed by initiating the execution of doAsyncTask(), after getting the result back it is displayed.
console.log("surpassed");

// we can directly use in the below mentioned way.
// let promise = Promise.resolve("done");
let promise = Promise.reject("reject");

promise.then((val) => console.log(val));

// or use as below
let promise1 = Promise.resolve("resolve")
.then(
    (val) => {
        console.log(val);
        throw new Error("error..!");
        //return 'done2';
    },
    (err) => console.log(err)
    // or directly throw an error
    // throw new Error("fail");
).then(
    (val) => console.log(val),
    (err) => console.log(err)
).catch(
    (err) => console.log(err)
)