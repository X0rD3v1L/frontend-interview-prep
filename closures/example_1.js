function example() {
    let name = "Benarjee Sambangi";
    function printName(){
        console.log(name);
    }
    //variable name is declared above but can be accessed inside the printName function
    printName();
}

example();

//Here the variable is function scoped so it can be accessed anywhere within the function body