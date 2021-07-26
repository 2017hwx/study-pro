const arraylog = new hwxLog()
arraylog.open = true;

function typeOf(o) {
    return Object.prototype.toString.call(o).slice(8, -1).toLocaleLowerCase();
}

Array.prototype.hwx_flat = function () {
    if (this === undefined) {
        throw new TypeError('this is null or not undefined');
    }
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
    if (this === undefined) {
        throw new TypeError('this is null or not undefined');
    }
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
    if (this === undefined) {
        throw new TypeError('this is null or not undefined');
    }
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
    if (this === undefined) {
        throw new TypeError('this is null or not undefined');
    }
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
    if (this === undefined) {
        throw new TypeError('this is null or not undefined');
    }
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
            return new self(...args, ...arguments)
        }
        return self.hwx_apply(context, [...args, ...arguments])
    }
}

String.prototype.hwxCamelCase = function () {
    if (!this) return this
    function toUp(x) {
        return x.slice(1).toUpperCase();
    }
    return this.replace(/-\w/g, toUp).replace(/_\w/g, toUp)
}

arraylog.log('is_hwx-abc'.hwxCamelCase())


