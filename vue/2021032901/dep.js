class Dep {
    constructor() {
        this.subs = [];//所有订阅的watcher
    }
    addSub(watcher) {//add
        this.subs.push(watcher)
    }
    depend() {//收集依赖
        if (Dep.target) {//Dep.target 作用只有需要的才会收集依赖
            Dep.target.addDep(this)
        }
    }
    notify() {// 调用依赖收集的Watcher更新
        const subs = this.subs.slice();
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
        }
    }
}

// 为Dep.target 赋值
function pushTarget(watcher) {
    Dep.target = watcher
}

