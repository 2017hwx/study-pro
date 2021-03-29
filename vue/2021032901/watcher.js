class Watcher {
    constructor(vm, expOrFn, cb, options) {
        this.vm = vm;//传进来的对象 例如Vue
        this.cb = cb;//在Vue中cb是更新视图的核心，调用diff并更新视图的过程       
        this.newDeps = [];//收集Deps，用于移除监听
        this.getter = expOrFn;
        this.value = this.get();//设置Dep.target的值，依赖收集时的watcher对象
    }
    get() {
        pushTarget(this);
        const vm = this.vm;
        let value = this.getter.call(vm, vm)
        return value;
    }

    addDep(dep) {
        this.newDeps.push(dep);
        dep.addSub(this);
    }

    update() {
        this.run();
    }

    run() {
        console.log(`这里会去执行Vue的diff相关方法，进而更新数据`)
    }
}