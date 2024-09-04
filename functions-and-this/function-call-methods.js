//As a normal function

function greet(){
    console.log("Hello, World!");
}

greet();

//As a method
const obj = {
    name: "Benarjee Sambangi",
    wish: function (){
        console.log("Happy Birthday " + this.name);
    }
};

obj.wish();