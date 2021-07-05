### 1.HTML5
- 定义了一系列新元素，如新语义标签、智能表单、多媒体标签等，可以帮助开发者创建富互联网应用
- 提供了一些Javascript API，如地理定位、重力感应、硬件访问等，可以在浏览器内实现类原生应用。
### 2.HTML5新增元素
- 图形`<canvas>`
- 多媒体相关`<audio>`|`<video>`|`<source>`|`<embed>`插件|`<track>`字幕
- 表单`<datalist>|<keygen>|<output>`
- 语义`<article><aside><footer><header><nav><dialog><section><time>`
- 语义`<meter><progress><bdi><command><details><summary><mark><figure><figcaption><wbr><ruby><rt><rp>`
### 3.HTML5删除元素
- `<acronym><applet><basefont><big><center><dir><font><frame><frameset><noframes><strike><tt>`
### 4.input新type
- color、date、datetime、datetime-local、email、month、number、range、search、tel、time、url、week
### audio
- 支持格式：MP3、Wav、Ogg。
- 属性：autoplay，controls，loop，muted静音，preload加载模式，src
- 事件：canplaythrough加载完，timeupdate时长改变,volumechange
- 操作：play(),pause(),
- 操作属性：duration总时长，当前时长currentTime，volume 音量
### video
- 支持格式：MP4、WebM、Ogg。
- 属性：autoplay，controls，loop，muted静音，preload加载模式，src,height/width,poster下载时显示的图片地址
- 事件：canplaythrough加载完，timeupdate时长改变,volumechange,enterpictureinpicture进入画中画，leavepictureinpicture推出画中画
- 操作：play(),pause(),requestPictureInPicture()，document.exitPictureInPicture();
- 操作属性：duration总时长，当前时长currentTime，volume 音量
- flash播放器处理兼容
`
<!--<object id="flowplayer" width="400" height="300"
    data="flowplayer-3.2.18.swf"
    type="application/x-shockwave-flash">
    <param name="movie"value="flowplayer-3.2.18.swf">
    <param name="flashvars"value='config={"clip":"hangge.mp4"}'>
    <video controls>
        <source src="hangge.mp4"type="video/mp4">
        <source src="hangge.webm"type="video/webm">
    </video>
</object>
<video width="320" height="240" controls="controls">
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  <source src="movie.webm" type="video/webm" />
  <object data="movie.mp4" width="320" height="240">
    <embed src="movie.swf" width="320" height="240" />
  </object>
</video>-->
`

### canvas画布
- moveTo(x,y)起点
- lineTo(x,y)起点到x,y的直线
- lineWidth线宽，上下各占一半，默认1
- lineCaps 线末端样式类型 "butt"方形, "round"圆形，凸出, "square"方形，凸出线宽一半长度
- lineJoin接口处样式类型round弧形, bevel磨平 和 miter默认菱形
- setLineDash([20, 5]);  // 虚线[实线长度, 间隙长度]，lineDashOffset 偏移量
- stroke()描边
- strokeStyle 描边颜色
- beginPath、closePath 路径开始、结束
- fill()填充，自动闭合路径
- fillStyle填充颜色
- rect(x,y,width,height)矩形，起点坐标，宽高
- fillRect(x,y,width,height)填充矩形，等于rect(),fill()
- strokeRect(x,y,width,height)轮廓矩形，等于rect(),stroke()
- clearRect(x,y,width,height)清除矩形
- arc(x,y,r,startAngle,endAngle,anticlockwise)xy圆心坐标，r半径，startAngle|endAngle开始结弧度，逆时针
- arcTo(x,y,x1,y1,r)起始点到两控制点坐标（与圆弧形成切面），r半径
- quadraticCurveTo(cp1x, cp1y, x, y)二次贝塞尔曲线，起始点到两控制点坐标
- bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)三次次贝塞尔曲线，起始点到三控制点坐标
- fillText(text,x,y[, maxWidth]),font,textAlign ,direction ,textBaseline 
- strokeText(text,x,y[, maxWidth]),font,textAlign ,direction ,textBaseline 
- drawImage(img,x,y,w,h)绘图
- save() restore(),strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation 的值
- translate(x,y)原点偏移
- ratate(angle)旋转
- scale(x,y)x,y轴像素缩放
- transform(a,b,c,d,e,f)变形矩阵
- globalCompositeOperation 重叠方式source-over/in/out/atop新图覆盖,destination-over/in/out/atop老图覆盖,lighter/darken/lighten重叠处加颜色，xor重叠处透明，copy只显示新图
- clip()裁剪，遮罩之后绘制的图
- createLinearGradient(x1,y1,x2,y2)渐变
- addColorStop(offset, color)offset0,1;
### canvas动画
- 清空canvas,比如clearRect()
- 保存之前save(),恢复restore()
- setInterval() setTimeout() requestAnimationFrame()
  
### Canvas 与 SVG 的比较
- **Canvas**通过JavaScript来绘制2D图形。是逐像素进行渲染的。一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象
- 依赖分辨率
- 不支持事件处理器
- 弱的文本渲染能力
- 能够以 .png 或 .jpg 格式保存结果图像
- 最适合图像密集型的游戏，其中的许多对象会被频繁重绘
- **SVG** 是一种使用 XML 描述2D图形的语言。这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。
- 不依赖分辨率
- 支持事件处理器
- 最适合带有大型渲染区域的应用程序（比如谷歌地图）
- 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
- 不适合游戏应用
### SVG
- rect(矩形)    
- circle(圆)  
- ellipse(椭圆)   
- line(直线)   
- polyline(折线)  
- polygon(多边形)  
  #### 样式
- fill(填充颜色)   
- fill-opacity(填充透明度)
- stroke(边框颜色)   
- stroke-width(边框宽度)   
- stroke-opacity(边框透明度)   
- stroke-dasharray(创建虚线)
- transform(变换)
- filter(滤镜)(url[#滤镜id)]
#### 路径
| 命令 | 名称                                      | 参数                                                   |
| ---- | ----------------------------------------- | ------------------------------------------------------ |
| M    | moveto  移动到                            | (x y)+                                                 |
| Z    | closepath  关闭路径                       | (none)                                                 |
| L    | lineto  画线到                            | (x y)+                                                 |
| H    | horizontal lineto  水平线到               | x+                                                     |
| V    | vertical lineto  垂直线到                 | y+                                                     |
| A    | elliptical arc椭圆弧                      | (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+ |
| C    | curveto 三次贝塞尔曲线到                  | (x1 y1 x2 y2 x y)+                                     |
| S    | smooth curveto光滑三次贝塞尔曲线到        | (x2 y2 x y)+                                           |
| Q    | Bézier curveto二次贝塞尔曲线到            | (x1 y1 x y)+                                           |
| T    | smooth Bézier curveto光滑二次贝塞尔曲线到 | (x y)+                                                 |


### 地理定位
```html
window.navigator.geolocation {
    getCurrentPosition:  fn  用于获取当前的位置数据
    watchPosition: fn  监视用户位置的改变
    clearWatch: fn  清除定位监视
}
navigator.geolocation.getCurrentPosition(    
    function(pos){　　
        console.log(arguments);　　　　
        console.log('定位时间：',pos.timestamp)　　　　
        console.log('经度：',pos.coords.longitude)　　　　
        console.log('纬度：',pos.coords.latitude)　　　　
        console.log('海拔：',pos.coords.altitude)　　　　
        console.log('速度：',pos.coords.speed)
    },   
     function(err){ console.log('用户定位数据获取失败')　　　　
}        
```

### localStorage
- 保存数据：localStorage.setItem(key,value);
- 读取数据：localStorage.getItem(key);
- 删除单个数据：localStorage.removeItem(key);
- 删除所有数据：localStorage.clear();
- 得到某个索引的key：localStorage.key(index);
### WebSocket
WebSocket是HTML5开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。在WebSocket API中，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。
```
function webSocketTest(){
    if(!'WebSocket' in window){
        return false
    }
   const ws= new WebSocket('ws://')
   ws.onopen=function(){
        ws.send("发送数据");//
   }
   ws.onmessage=function(event){
       
   }
   ws.onclose=function(){
       
   }
}
```
### worker 子线程
- 同源限制,分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。
- DOM 限制,Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用document、window、parent这些对象。但是，Worker 线程可以navigator对象和location对象。
- 通信联系,Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成。
- 脚本限制,Worker 线程不能执行alert()方法和confirm()方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。
- 文件限制,Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络。
```
        let work = null
        function startWorker() {
            if (typeof (Worker) != undefined && !work) {
                work = new Worker('demo_worker.js')
                work.onmessage = function (event) {           
                    document.getElementById('output').innerHTML = event.data
                }
            } else {
                document.getElementById('output').innerHTML = "不支持"
            }
        }
        function stopWorker() {
            work.terminate()
        }
    //demo_worker.js
    function timedCount() {
        for (let index = 0; index < 100000000; index++) {
            postMessage(index);
        }
    }
timedCount()

//vue-worker
 // worker是在另外的线程里面跑的，所以可以在run的第一个参数函数里面执行一个非常大计算的操作
// run方法像Promise一样提供.then和.catch，then的参数就是run第一个参数函数的返回值
this.worker = this.$worker.run(n => n + 10, [2])
   // 数组中为传递给worker的参数，可以传递多个，此案例为2
    .then(res => console.log(res)) 
    // res为worker计算结束return返回的结果数据，可以在.then里根据返回结果继续操作主线程后续任务

```

