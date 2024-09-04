const promise = Promise.resolve("I am resolved");

const example = async (promise) => {
    try{
        const response = await promise;
        return response;
    }catch(error) {
        console.error(error);
    }finally{
        console.log("Task done");
    }
};

// console.log(example(promise));

example(promise).then((val) => {
    console.log(val);
})