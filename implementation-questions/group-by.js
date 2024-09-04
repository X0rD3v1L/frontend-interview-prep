const groupBy = (values, keyFinder) => {
    return values.reduce((prevValue, currValue) => {
        const key = typeof keyFinder === "function" ? keyFinder(currValue) : currValue[keyFinder];

        if(!prevValue[key]){
            prevValue[key] = [currValue];
        }else{
            prevValue[key] = [...prevValue[key], currValue];
        }

        return prevValue;
    }, {});
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(["one", "two", "three"], "length"));