function deboune(fn, delay = 1000) {
    let timer = null
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        const context = this
        timer = setTimeout(() => {
            typeof fn === "string" ? context[fn](...args) : fn.apply(context, args)
        }, delay)
    }
}
