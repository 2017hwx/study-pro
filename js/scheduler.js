class Scheduler {
    constructor(max = 3) {
        this.queue = []
        this.max = max
        this.runCount = 0
    }

    add(promise) {
        this.queue.push(promise)
    }

    taskStart() {
        for (let i = 0; i < this.max; i++) {
            this.request()
        }
    }
    request() {
        if (this.queue.length > 0 && this.runCount <= this.max) {
            this.runCount++
            let runTask = this.queue.shift()
            runTask().then(res => {
                this.runCount--
                this.request()
            })
        }
    }
}
// const timeout = time => new Promise(resolve => {
//     setTimeout(resolve, time);
// })
// const scheduler = new Scheduler();
// const addTask = (time, order) => {
//     scheduler.add(() => timeout(time).then(() => console.log(order)))
// }

// addTask(1000, '1');
// addTask(500, '2');
// addTask(300, '3');
// addTask(400, '4');
// scheduler.taskStart()