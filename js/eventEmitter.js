class EventEmitter {
    constructor() {
        this.event = {}
    }
    on(type, callback) {
        if (this.event[type]) {
            this.event[type].push(callback)
        } else {
            this.event[type] = [callback]
        }
    }
    off(type, callback) {
        if (this.event[type]) {
            this.event[type] = this.event[type].filter(cb => cb !== callback)
        }
    }
    once(type, callback) {
        function fn() {
            callback()
            this.off(type, fn)
        }
        this.on(type, fn)
    }
    emit(type, args) {
        this.event[type] && this.event[type].forEach(cb => {
            cb.call(this, ...args)
        })
    }
}