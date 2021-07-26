function asyncToGenerator(generatorFunc) {
    return function () {
        const gen = generatorFunc.apply(this, [...arguments])
        return new Promise((resolve, reject) => {
            function step(key, ...args) {
                let result = null
                try {
                    result = gen[key](...args)
                } catch (error) {
                    return reject(error)
                }
                let { value, done } = result
                if (done) {
                    return resolve(value)
                } else {
                    Promise.resolve(value).then(v1 => step('next', v1), err => step('throw', err))
                }
            }
            step('next')
        })
    }
}

const getData = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000))
function* testG() {
    // await被编译成了yield
    const data = yield getData()
    const data2 = yield getData()
    return [data, data2, 'success']
}

const testasync = asyncToGenerator(testG)
testasync().then(res => {
    console.log(res)
}).then(res => {
    console.log(res)
})
// // 返回了一个迭代器
// var gen = testG()

// var {done,value} = gen.next()

// dataPromise.then((value1) => {
//     // data1的value被拿到了 继续调用next并且传递给data
//     var data2Promise = gen.next(value1)

//     // console.log('data: ', data);
//     // 此时就会打印出data

//     data2Promise.then((value2) => {
//         // data2的value拿到了 继续调用next并且传递value2
//         gen.next(value2)

//         // console.log('data2: ', data2);
//         // 此时就会打印出data2
//     })
// })

