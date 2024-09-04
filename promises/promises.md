## Promises

```
Javascript is a synchronous, single-threaded language, but can be made asynchronous using callback functions.
And promises help to get out of the "callback hell" while dealing with async code.
```

Promises have two outcomes - either fullfilled or rejected.
Promised has three methods available to it - then, catch and finally.

```
then(onResolvedFn, onRejectedFn) – This will be called either when the promise is rejected or resolved. Depending upon the state, appropriate callback functions will be invoked with the value.

catch(onRejectFn) – This will be called when the promise is rejected with the reason.

finally(onFinallyFn) – This will be called every time after then and catch.
```

```
Promise.resolve(value) creates a resolved promise.
Promise
.resolve("I am resolved")
.then((val) => {console.log(val); }); // I am resolved
```

```
Promise
.reject("I am throwing error")
.catch((error) => {console.error(error); }); // I am throwing error
```

## Process methods

Promise.all()

Promise.allSettled()

Promise.any()

Promise.race()

These methods help to process async tasks concurrently.

## async...await in ES6

```
const promise = Promise.resolve("I am resolved");

async function example(promise){
    try{
        const response = await promise;
        console.log(response);
    }catch (error){
        console.error(error);
    }finally {
        console.log("Task done");
    }
}
```