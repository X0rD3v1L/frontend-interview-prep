class MinStack {
    constructor(){
        this.stack = [];
        this.minStack = [];
    }

    push(val){
        if (!this.minStack.length){
            this.minStack.push(val);
            this.stack.push(val);
        }else{
            this.stack.push(val);
            this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val));
        }
    }

    pop(){
        if(!this.minStack.length) return null;
        this.minStack.pop();
        return this.stack.pop();
    }

    top(){
        return this.stack[this.stack.length - 1];
    }

    getMin(){
        return this.minStack[this.minStack.length - 1];
    }
}

let stack = new MinStack();

stack.push(1);
stack.push(-1);

console.log(stack.getMin());