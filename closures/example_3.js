function sum() {
    let a = 10;
    
    function add(b) {
        return a + b;
    }

    return add;
}

//even though we returned the function it still has access to the variables in the outer scope
const fn = sum();
let total = fn(20);

console.log(total);


function x(a) {
    function y(b) {
        function z(c) {
            return a + b + c;
        }
        return z;
    }
    return y;
}

const a = x(10);
let b = a(20);
let c = b(30);

console.log(c);