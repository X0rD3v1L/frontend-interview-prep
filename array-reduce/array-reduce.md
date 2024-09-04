## Array Reduce Method

```
Array.reduce() is one of the powerful method using which we can perform different types of actions like segregation,
aggregation, running things in a sequence/serial etc.
```

```
arr.reduce((previousValue, currentValue, currentIndex, array) => {
    const nextValue = previousValue + currentValue;
    return nextValue;
}, initialValue);
``` 