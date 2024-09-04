//resolve a promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 5000);
});


console.log(promise);

// setTimeout(() => {
//     console.log(promise);
// }, 6000);

promise
.then((val) => { return "ABC "+ val; })
.then((val) => { console.log(val); })
.finally(() => { console.log("Task done")});

//reject a promise
const reject_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error 404");
    }, 5000);
});

reject_promise.then(null, (error) => {
    console.error("Called from then method", error);
});

reject_promise.catch((error) => {
    console.error("Called from catch method", error);
});