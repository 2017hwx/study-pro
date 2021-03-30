class Dep {//依赖管理
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
class Watcher {//订阅者
    constructor(vm, node, name) {
        this.newDeps = []
        Dep.target = this;
        this.vm = vm;
        this.node = node;
        this.name = name;
        this.update()
    }
    addDep(dep) {
        // 这里简单处理，在Vue中做了重复筛选，即依赖只收集一次，不重复收集依赖
        this.newDeps.push(dep)
        dep.addSub(this)
    }
    get() {
        this.value = this.vm[this.name]
    }
    update() {
        this.get()
        this.node.innerText = this.value
    }
}
function compile(node, vm) {//dom解析器
    const res = /\{\{(.*)\}\}/
    if (node.nodeType === 1) {//dom
        const attr = node.attributes;
        for (let i = 0, l = attr.length; i < l; i++) {
            if (attr[i].nodeName === 'v-model') {
                let name = attr[i].nodeValue;
                node.addEventListener('input', function (e) {
                    vm[name] = e.target.value;
                })
                node.value = vm[name];
                node.removeAttribute('v-model');
            }
        }
        if (res.test(node.innerText)) {
            let name = RegExp.$1;
            name = name.trim();
            //node.innerText = vm[name];
            new Watcher(vm, node, name)
        }
    }
}

function nodeToFragment(node, vm) {//dom容器
    const fragment = document.createDocumentFragment();
    let child = null;
    while (child = node.firstElementChild) {
        compile(child, vm);
        fragment.appendChild(child);
    }
    node.appendChild(fragment);
}

function defineReactive(obj, prop, val) {
    const dep = new Dep();
    Object.defineProperty(obj, prop, {
        //configurable: false,
        //enumerable: true,
        //writable: false,
        get: function () {
            dep.depend();
            return val;
        },
        set: function (newval) {
            if (val === newval) {
                return;
            }
            val = newval;
            dep.notify();
        }
    })
}

function observe(obj, vm) {
    for (let key of Object.keys(obj)) {
        defineReactive(vm, key, obj[key]);
    }
}




class Vue {
    constructor(options) {
        this.data = options.data;
        observe(this.data, this)
        nodeToFragment(document.getElementById(options.el), this);
    }
}