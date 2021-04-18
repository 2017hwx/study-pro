/**
 * 防抖
 * @param {*} fn 函数
 * @param {*} delay 延迟时间
 * @param {*} immediate 是否立即执行
 * @returns 
 */
function debounce(fn, delay, immediate) {
    let timer = null;
    return function () {
        let args = arguments;
        let _this = this;
        if (timer) {
            clearTimeout(timer);
        }
        if (immediate) {
            let isNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, delay);
            if (isNow) {
                fn.apply(_this, args)
            }
        } else {
            timer = setTimeout(() => {
                fn.apply(_this, args)
            }, delay);
        }
    }
}

function debounce2(fn, delay) {
    let timer

    return function () {
        let _this=this;
        let args = arguments
        if (timer) clearTimeout(timer)


        let callNow = !timer
        timer = setTimeout(() => {
            timer = null
        }, delay);
        if (callNow) { 
            fn.apply(_this,args)
        }
    }
}
