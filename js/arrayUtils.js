function typeOf(o) {
    let res = Object.prototype.toString.call(o)//[Object String]
    return res.slice(8, res.length - 1).toLocaleLowerCase();
}

function checkContext(ctx) {
    if (ctx === undefined) {
        throw new TypeError('this is null or not undefined');
    }
}

Array.prototype.hwx_flat = function () {
    checkContext(this)
    let ctx = Object(this);
    const flatten = function (a, arr = []) {
        const len = a.length
        for (let i = 0; i < len; i++) {
            if (typeOf(a[i]) === 'array') {
                flatten(a[i], arr)
            } else {
                arr.push(a[i])
            }
        }
    }
    let res = []
    flatten(ctx, res)
    return res
}

Array.prototype.hwx_filter = function (callback, that) {
    checkContext(this)
    if (typeOf(callback) !== 'function') {
        throw new TypeError('callback is not function')
    }
    let ctx = Object(this);
    const len = ctx.length
    let res = []
    for (let i = 0; i < len; i++) {
        if (i in ctx) {//检测属性，防止length被随意赋值
            if (callback.apply(that, [ctx[i], i, ctx])) {
                res.push(ctx[i])
            }
        }
    }
    return res
}

Array.prototype.hwx_map = function (callback, that) {
    checkContext(this)
    if (typeOf(callback) !== 'function') {
        throw new TypeError('callback is not function')
    }
    let ctx = Object(this);
    const len = ctx.length
    let res = []
    for (let i = 0; i < len; i++) {
        if (i in ctx) {//检测属性，防止length被随意赋值
            const el = callback.apply(that, [ctx[i], i, ctx])
            res.push(el)
        }
    }
    return res
}

Array.prototype.hwx_foreach = function (callback, that) {
    checkContext(this)
    if (typeOf(callback) !== 'function') {
        throw new TypeError('callback is not function')
    }
    let ctx = Object(this);
    const len = ctx.length
    for (let i = 0; i < len; i++) {
        if (i in ctx) {//检测属性，防止length被随意赋值
            callback.apply(that, [ctx[i], i, ctx])
        }
    }
}

Array.prototype.hwx_reduce = function (callback, initValue) {
    checkContext(this)
    if (typeOf(callback) !== 'function') {
        throw new TypeError('callback is not function')
    }
    let ctx = Object(this);
    const len = ctx.length
    let acc = initValue
    let k = 0;
    for (let i = 0; i < len; i++) {
        if (i in ctx) {//检测属性，防止length被随意赋值
            if (acc === undefined && k === 0) {
                // 初始值为undefined,则数组的第一个有效值作为累加器的初始值
                acc = ctx[i]
            } else {
                acc = callback.apply(null, [acc, ctx[i], i, ctx])
            }
            k++
        }
    }
    if (acc === undefined) {
        throw new TypeError('Reduce of empty array with no initial value');
    }
    return acc;
}
Function.prototype.hwx_call = function (context = window, ...args) {
    if (typeOf(this) !== 'function') {
        throw new TypeError('this is not function')
    }
    const fn = Symbol('fn')
    context[fn] = this;
    const res = context[fn](...args)
    delete context[fn]
    return res;
}

Function.prototype.hwx_apply = function (context = window, args) {
    if (typeOf(this) !== 'function') {
        throw new TypeError('this is not function')
    }
    const fn = Symbol('fn')
    context[fn] = this;
    const res = context[fn](...args)
    delete context[fn]
    return res;
}

Function.prototype.hwx_bind = function (context, ...args) {
    if (typeOf(this) !== 'function') {
        throw new TypeError('this is not function')
    }
    const self = this
    return function F() {
        if (this instanceof F) {
            //context = this;
            return new self(...args, ...arguments)
        }
        return self.hwx_apply(context, [...args, ...arguments])
    }
}