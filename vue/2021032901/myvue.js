class SelfVue {
  constructor(options) {
    var self = this;
    this.data = options.data;
    this.methods = options.methods;
    this.vm = this;
    Object.keys(this.data).forEach(function (key) {
      self.proxyKeys(key); // 绑定代理属性
    });

    new Observe(this.data);
    new Compile(options.el, this.vm);
    options.mounted.call(this); // 所有事情处理好后执行mounted函数
  }
  proxyKeys(key) {
    var self = this;
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get: function getter() {
        return self.data[key];
      },
      set: function setter(newVal) {
        self.data[key] = newVal;
      },
    });
  }
}

class Observe {
  constructor(data) {
    if (!data || typeof data !== "object") {
      return;
    }
    Object.keys(data).forEach((key) => {
      this.defineReactive(data, key, data[key]);
    });
  }

  defineReactive(data, key, value) {
    new Observe(value); //遍历所有字属性
    var dep = new Dep(); //添加订阅者
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      set(newVal) {
        //新值旧值一样直接返回
        if (value === newVal) {
          return;
        }
        value = newVal;

        console.log(`属性${key}已经被监听了，现在值为：“${newVal.toString()}”`);
        //所有订阅者更新
        dep.notify();
      },
      get() {
        dep.depend(); // 在这里添加一个订阅者
        return value;
      },
    });
  }
}

class Dep {
  constructor() {
    this.subs = [];
    this.target = null;
  }

  depend() {
    if (Dep.target) {
      this.addSub(Dep.target); // 在这里添加一个订阅者
    }
  }

  addSub(sub) {
    this.subs.push(sub);
  }
  notify() {
    this.subs.forEach(function (sub) {
      sub.update();
    });
  }
}
class Watcher {
  constructor(vm, exp, cb) {
    this.vm = vm;
    //需要监听的字段名字
    this.exp = exp;
    this.cb = cb;
    this.value = this.get(); // 将自己添加到订阅器的操作
  }
  update() {
    this.run();
  }
  run() {
    let value = this.vm.data[this.exp];
    let oldValue = this.value;
    if (value !== oldValue) {
      this.value = value;
      this.cb.call(this.vm, value, oldValue);
    }
  }
  get() {
    Dep.target = this; //缓存
    let value = this.vm.data[this.exp];
    Dep.target = null; //释放
    return value;
  }
}
class Compile {
  constructor(id, vm) {
    this.vm = vm;
    this.el = document.querySelector("#" + id);
    this.fragment = null;
    this.init();
  }
  init() {
    if (this.el) {
      this.fragment = this.nodeToFragment(this.el);
      this.compileElement(this.fragment);
      this.el.appendChild(this.fragment);
    } else {
      console.log("Dom元素不存在");
    }
  }
  nodeToFragment(el) {
    var fragment = document.createDocumentFragment();
    var child = el.firstChild;
    while (child) {
      // 将Dom元素移入fragment中
      fragment.appendChild(child);
      child = el.firstChild;
    }
    return fragment;
  }
  compileElement(el) {
    var childNodes = el.childNodes;
    var self = this;
    [].slice.call(childNodes).forEach(function (node) {
      var reg = /\{\{(.*)\}\}/;
      var text = node.textContent;

      if (self.isElementNode(node)) {
        self.compile(node);
      } else if (self.isTextNode(node) && reg.test(text)) {
        self.compileText(node, reg.exec(text)[1]);
      }

      if (node.childNodes && node.childNodes.length) {
        self.compileElement(node);
      }
    });
  }
  compile(node) {
    var nodeAttrs = node.attributes;
    var self = this;
    Array.prototype.forEach.call(nodeAttrs, function (attr) {
      var attrName = attr.name;
      if (self.isDirective(attrName)) {
        var exp = attr.value;
        var dir = attrName.substring(2);
        if (self.isEventDirective(dir)) {
          // 事件指令
          self.compileEvent(node, self.vm, exp, dir);
        } else {
          // v-model 指令
          self.compileModel(node, self.vm, exp, dir);
        }
        node.removeAttribute(attrName);
      }
    });
  }
  compileText(node, exp) {
    var self = this;
    var initText = this.vm[exp];
    this.updateText(node, initText);
    new Watcher(this.vm, exp, function (value) {
      self.updateText(node, value);
    });
  }
  compileEvent(node, vm, exp, dir) {
    var eventType = dir.split(":")[1];
    var cb = vm.methods && vm.methods[exp];

    if (eventType && cb) {
      node.addEventListener(eventType, cb.bind(vm), false);
    }
  }
  compileModel(node, vm, exp, dir) {
    var self = this;
    var val = this.vm[exp];
    this.modelUpdater(node, val);
    new Watcher(this.vm, exp, function (value) {
      self.modelUpdater(node, value);
    });

    node.addEventListener("input", function (e) {
      var newValue = e.target.value;
      if (val === newValue) {
        return;
      }
      self.vm[exp] = newValue;
      val = newValue;
    });
  }
  updateText(node, value) {
    node.textContent = typeof value == "undefined" ? "" : value;
  }
  modelUpdater(node, value, oldValue) {
    node.value = typeof value == "undefined" ? "" : value;
  }
  isDirective(attr) {
    return attr.indexOf("v-") == 0;
  }
  isEventDirective(dir) {
    return dir.indexOf("on:") === 0;
  }
  isElementNode(node) {
    return node.nodeType == 1;
  }
  isTextNode(node) {
    return node.nodeType == 3;
  }
}
