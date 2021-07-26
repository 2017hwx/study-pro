class Parent {
    constructor(name) {
        this.name = name
    }
    say() {
        console.log(this.name)
    }
}

class Child extends Parent {
    constructor(age, name) {
        super(name)
        this.age = age
    }
    hello() {
        console.log(this.age)
    }
}
// const p = new Parent('hwx')
// console.log(p, p.say())
// const c = new Child(18, 'hwx')
// console.log(c, c.say(), c.hello())

function Parent1(name) {
    this.name = name
}
Parent1.prototype.say = function () {
    console.log(this.name)
}
function Child1(age, name) {
    //构造继承， 将父类的构造函数绑定在子类上
    Parent1.call(this, name)
    this.age = age
}
/** 
 * 原型链继承
 1. 这一步不用Child.prototype =Parent.prototype的原因是怕共享内存，修改父类原型对象就会影响子类
 2. 不用Child.prototype = new Parent()的原因是会调用2次父类的构造方法（另一次是call），会存在一份多余的父类实例属性
3. 寄生模式，Object.create是创建了父类原型的副本，与父类原型完全隔离
*/
Child1.prototype=Object.create(Parent1.prototype)
// 注意记得把子类的构造指向子类本身
Child1.prototype.constructor = Child1;
Child1.prototype.hello = function () {
    console.log(this.age)
}
// const p1 = new Parent1('hwx')
// console.log(p1, p1.say())
// const c1 = new Child1(18, 'hwx')
// console.log(c1, c1.say(), c1.hello())