const defineReactive = (obj, prop, val) => {
    Object.defineProperty(obj, prop, {
        configurable: false,
        enumerable: true,
        writable: true,
        get: function () {
            return val;
        },
        set: function (newval) {
            if (val === newval) {
                return;
            }
            val = newval;
        }
    })
}

class Observer {
    constructor(value) {
        this.value = value;
        this.dep = new Dep();
    }
}