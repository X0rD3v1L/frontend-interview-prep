const asyncTask = function(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Completing ${time}`), 1000*time);
    });
}

const promises = [
    asyncTask(3),
    asyncTask(1),
    asyncTask(7),
    asyncTask(2),
    asyncTask(5),
]

const asyncSeriesExecutor = function(promises) {
    promises.reduce((acc, curr) => {
        return acc.then(() => {
            return curr.then(val => {console.log(val)});
        });
    }, Promise.resolve());
};

asyncSeriesExecutor(promises);
