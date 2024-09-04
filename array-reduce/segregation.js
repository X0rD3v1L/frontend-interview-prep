const arr = [1.1, 1.2, 1.3, 1.4, 1.5, 2.2, 2.3, 2.4];

const segregate = arr.reduce((previousValue, currentValue) => {

    const floored = Math.floor(currentValue);

    if(!previousValue[floored]){
        previousValue[floored] = [];
    }

    previousValue[floored].push(currentValue);

    return previousValue;

}, {});

console.log(segregate);