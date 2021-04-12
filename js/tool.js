
function Stack1() {
    let stack = []//闭包，对外不可见
    this.push = function (element) {
        stack.push(element)
    }
    this.pop = function () {
        return stack.pop()
    }
    this.size = function () {
        return stack.length
    }
    this.empty = function () {
        stack = [];
    }
}
/////等同class Stack
const Stack2 = function () {
    this.stack = []
}
Stack2.prototype.push = function (element) {
    this.stack.push(element)
}
Stack2.prototype.pop = function () {
    this.stack.pop()
}
Stack2.prototype.size = function () {
    return this.stack.length
}
Stack2.prototype.empty = function () {
    this.stack = [];
}
/////同上结构
class Stack {
    constructor() {
        this.stack = [];
    }
    push(element) {
        this.stack.push(element)
    }
    pop() {
        return this.stack.pop()
    }
    size() {
        return this.stack.length
    }
    empty() {
        this.stack = [];
    }
}
class Queue {
    constructor() {
        this.queue = [];
    }
    push(element) {
        this.queue.push(element)
    }
    pop() {
        return this.queue.shift()
    }
    size() {
        return this.queue.length
    }
    empty() {
        this.queue = [];
    }
}