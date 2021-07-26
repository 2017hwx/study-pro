const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
class HwxPromise {
    constructor(executor) {
        this.status = PENDING
        this.resolveTasks = []
        this.rejectTasks = []
        let _resolve = (value) => {
            if (this.status === PENDING) {
                this.status = FULFILLED
                setTimeout(() => {
                    this.resolveTasks.forEach(fn => fn.call(this, value))
                });
            }
        }
        let _reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED
                setTimeout(() => {
                    this.rejectTasks.forEach(fn => fn.call(this, reason))
                });
            }
        }
        try {
            executor(_resolve, _reject)
        } catch (error) {
            _reject(error)
        }
    }
    then(onFulfilled, onRejected) {
        if (typeof onFulfilled !== 'function') onFulfilled = value => value
        if (typeof onRejected !== 'function') onRejected = reason => { throw new Error(reason instanceof Error ? reason.message : reason) }

        const self = this;
        return new HwxPromise((resolve, reject) => {
            const newResolve = (value) => {
                try {
                    const res = onFulfilled(value)
                    res instanceof HwxPromise ? res.then(resolve, reject) : resolve(res)
                } catch (error) {
                    reject(error)
                }
            }
            const newReject = (reason) => {
                try {
                    const res = onRejected(reason)
                    res instanceof HwxPromise ? res.then(resolve, reject) : reject(res)
                } catch (error) {
                    reject(error)
                }
            }
            self.resolveTasks.push(newResolve)
            self.rejectTasks.push(newReject)
        })
    }
    catch(onRejected) {
        return this.then(null, onRejected)
    }
    static resolve(value) {
        return value instanceof HwxPromise ? value : new HwxPromise((resolve, reject) => { resolve(value) })
    }
    static reject(reason) {
        return new HwxPromise((resolve, reject) => { reject(reason) })
    }

    static all(promiseArray) {
        const len = promiseArray.length
        const values = []
        let count = 0;
        return new HwxPromise((resolve, reject) => {
            for (let i = 0; i < len; i++) {
                HwxPromise.resolve(promiseArray[i]).then(res => {
                    count++
                    values.push(res)
                    if (count === len) {
                        resolve(values)
                    }
                }, err => {
                    reject(err)
                })
            }
        })
    }

    static race(promiseArray) {
        const len = promiseArray.length
        return new HwxPromise((resolve, reject) => {
            for (let i = 0; i < len; i++) {
                HwxPromise.resolve(promiseArray[i]).then(res => {
                    resolve(res)
                }, err => {
                    reject(err)
                })
            }
        })
    }
}

const mypromise = new HwxPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 500);
}).then((res) => {
    console.log(res);
    return new HwxPromise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, 500);
    });
}).then((res) => {
    console.log(res);
    throw new Error('a error')
}).catch((err) => {
    console.log('==>', err);
})


