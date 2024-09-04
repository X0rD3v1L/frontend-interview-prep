function example() {
    let name = "Benarjee Sambangi";
    function printName(){
        let name = "Ben";
        //preference is always given to the nearest declared variable
        console.log(name);
    }
    printName();
}

example();