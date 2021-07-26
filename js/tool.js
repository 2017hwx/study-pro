class hwxLog {
    constructor() {
        this.open = false;
    }
    log(info) {
        if (this.open) {
            console.log(info)
        }
    }
}
const toollog = new hwxLog()
toollog.open = true;

function hwxRender(template, data) {
    return template.replace(/\{\{(\w+)\}\}/g, function (s) {
        let key = s.slice(2, -2);
        return data[key] || ''
    })
}
let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
    name: '姓名',
    age: 18
}
toollog.log(hwxRender(template, data)); // 我是姓名，年龄18，性别undefined

function _render(vnode) {
    if (typeof vnode === 'number') {
        vnode = String(vnode)
    }
    if (typeof vnode === 'string') {
        return document.createTextNode(vnode)
    }
    let dom = document.createElement(vnode.tag)
    if (vnode.attrs) {
        Object.keys(vnode.attrs).forEach(key => {
            dom.setAttribute(key, vnode.attrs[key])
        })
    }
    return dom;
}


function jsonp(url, params, callbackName) {
    function getUrls(url, params, callbackName) {
        let dataSrc = ''
        params = params || {}
        for (const key in params) {
            if (Object.hasOwnProperty.call(params, key)) {
                dataSrc += `${key}=${params[key]}&`
            }
        }
        return `${url}?${dataSrc}callback=${callbackName}`
    }
    let scripEl = document.createElement('script')
    scripEl.src = getUrls(url, params, callbackName)
    document.body.appendChild(scripEl)
    return new Promise((resolve, reject) => {
        window[callbackName] = data => {
            resolve(data)
            document.body.removeChild(scripEl)
        }
    })
}

function ajax(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, false)
        xhr.timeout = 20000
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (xhr.status === 200 || xhr.status === 304) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(xhr.responseText));
            }
        }
        xhr.send();
    })
}

function imgLazyload() {
    function isShow(el) {
        const postion = el.getBoundingClientRect()
        const clientHeight = document.documentElement.clientHeight;
        const topShow = postion.top && postion.top < clientHeight
        const bottomShow = postion.bottom && postion.bottom < clientHeight
        return topShow || bottomShow
    }
    const imgList = document.querySelectorAll('img')
    for (const img of imgList) {
        let src = img.dataset.src;
        if (!src) continue
        if (isShow(img)) {
            img.src = src
            img.dataset.src = ''
        }
    }
}
//加节流
window.addEventListener('scroll', imgLazyload())
window.addEventListener('scroll', function () {
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    if (clientHeight + scrollTop >= scrollHeight) {
        // 检测到滚动至页面底部，进行后续操作
        // ...
    }
}, false);


function listToTree(list) {
    let temp = {}
    list.forEach(item => {
        temp[item.id] = item
    })
    let treeData = [];
    for (const key in temp) {
        if (Object.hasOwnProperty.call(temp, key)) {
            if (+temp[key].parentId !== 0) {
                treeData.push(temp[key])
            } else {
                if (!temp[temp[key].parentId].children) {
                    temp[temp[i].parentId].children = [];
                }
                temp[temp[i].parentId].children.push(temp[key])
            }
        }
    }
    return treeData
}

function largeDomRender(container, list, size, render) {
    const total = list.length
    const loopCount = Math.ceil(total / size);
    for (let i = 0; i < loopCount; i++) {
        let start = i * size
        let end = (i + 1) * size - 1
        end = end > total ? total : end
        window.requestAnimationFrame(() => {
            const fragment = document.createDocumentFragment()
            while (start <= end) {
                const res = render(list[start])
                fragment.appendChild(res)
                start++
            }
            container.appendChild(fragment);
        })
    }
}


