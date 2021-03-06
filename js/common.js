function typeOf(o) {
    return Object.prototype.toString.call(o).slice(8, -1).toLocaleLowerCase();
}


function deboune(fn, delay = 1000) {
    let timer = null
    return function (...args) {
        if (timer) clearTimeout(timer)
        const context = this
        timer = setTimeout(() => {
            typeof fn === "string" ? context[fn](...args) : fn.apply(context, args)
        }, delay)
    }
}

function throttle(fn, wait = 1000) {
    let prev = new Date();
    return function (...args) {
        let now = new Date()
        if (now - prev > wait) {
            fn.apply(this, args)
            prev = new Date();
        }
    }
}

function throttle1(fn, wait = 1000) {
    let flag = true;
    return function (...args) {
        if (!flag) return;
        flag = false;
        setTimeout(() => {
            fn.apply(this, args)
            flag = true;
        }, wait);
    }
}

Object.defineProperty(Object, 'hwx_assign', {
    value: function (target, ...args) {
        if (target == null) {
            return new TypeError('Cannot convert undefined or null to object');
        }
        const to = Object(target)
        for (let i = 0; i < args.length; i++) {
            const newSource = args[i];
            for (const key in newSource) {
                if (Object.prototype.hasOwnProperty.call(newSource, key)) {
                    to[key] = newSource[key];
                }
            }
        }
        return to;
    }
})

function deepClone(target, hash = new WeakMap()) {
    if (typeof target !== 'object' || target === null) return target;

    if (hash.get(target)) return hash.get(target);

    let newObj = target instanceof Array ? [] : {};
    hash.set(target, newObj)
    //symbol
    let symKeys = Object.getOwnPropertySymbols(target)
    if (symKeys.length > 0) {
        symKeys.forEach(key => {
            if (typeof target[key] === 'object' && target[key] !== null) {
                newObj[key] = deepClone(target[key], hash)
            } else {
                newObj[key] = target[key]
            }
        })
    }
    for (let key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
            if (typeof target[key] === 'object' && target[key] !== null) {
                newObj[key] = deepClone(target[key], hash)
            } else {
                newObj[key] = target[key]
            }
        }
    }
    return newObj;
}

function hwx_curry(fn) {
    let args = Array.prototype.slice.call(arguments, 1)
    return function () {
        let newArgs = args.concat([...arguments])
        if (newArgs.length >= fn.length) {
            return fn.apply(this, newArgs)
        } else {
            return hwx_curry.call(this, fn, ...newArgs)
        }
    }
}

function hwx_create(proto, propertyObject = undefined) {
    function F() { }
    F.prototype = proto
    let obj = new F()
    if (propertyObject) {
        Object.defineProperty(obj, propertyObject)
    }
    if (proto === null) {
        obj.__proto__ = null;
    }
    return obj
}
function hwx_new() {
    let args = [...arguments];
    let Fn = args.shift()
    //let o = Object.create(Fn.prototype);
    let o = {}
    //Object.setPrototypeOf(o, Fn.prototype)
    o.__proto__ = Fn.prototype;
    //console.log(o)
    const res = Fn.apply(o, args)
    if (typeOf(res) === 'object' || typeOf(res) === 'function') {
        return res;
    } else {
        return o;
    }
}

function hwx_instanceof(left, right) {
    let l = left.__proto__
    let r = right.prototype
    while (true) {
        if (!l) return false;
        if (l === r) return true;
        l = l.__proto__
    }
}

function hwx_interval(fn, t) {
    let timer = null
    function interval() {
        fn()
        timer = setTimeout(interval, t);
    }
    interval()
    return {
        cancl() {
            clearTimeout(timer)
        }
    }
}