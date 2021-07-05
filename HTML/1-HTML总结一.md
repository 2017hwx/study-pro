### Web
- HTML（HyperText Markup Language）：超文本标记语言。从**语义**的角度描述页面的**结构**。相当于人的身体组织结构。
- CSS（Cascading Style Sheets）：层叠样式表。从**审美**的角度美化页面的**样式**。相当于人的衣服和打扮。
- JS：JavaScript。从**交互**的角度描述页面的**行为**。相当于人的动作，让人有生命力。
### HTML
- 超文本：音频、视频、多媒体、图片等超文本
- 标记语言：语义化标签，如a标签img标签等
- 没有编译过程，浏览器直接解析
- 语法松散
- HTML5是第5个版本
### XHTML可扩展超文本标记语言
- 为了规范HTML，严格、纯粹的HTML
- 标签名必须小写、闭合、正确嵌套、有根元素
- 符合XML语法标准的HTML
- 于HTML4.0标记基本一样
### DHTML 
- dynamic，动态的。javascript + css + html合起来的页面就是一个 DHTML。
### 标签
- 块级元素，上下排列，独占一行
- 行内元素，左右排列，自动换行，无法设置height、width，可用line-height、padding、margin.
- 块级元素,div,p,pre,h1-5,(ol有序列表,ul无序列表,li),(dl,dt,dd自定义条目),(form,fieldset,legend),table系列等
- 行内元素,a,img,input,select,textarea,br,b,strong,em,i等
- 空元素： br, hr, img, link, meta;
### 特殊字符
  
  | 特殊字符 | 描述           | 字符的代码 |
  | :------- | :------------- | :--------- |
  |          | 空格符         | `&nbsp;`   |
  | <        | 小于号         | `&lt;`     |
  | >        | 大于号         | `&gt;`     |
  | &        | 和号           | `&amp;`    |
  | ￥        | 人民币         | `&yen;`    |
  | ©        | 版权           | `&copy;`   |
  | ®        | 注册商标       | `&reg;`    |
  | °        | 摄氏度         | `&deg;`    |
  | ±        | 正负号         | `&plusmn;` |
  | ×        | 乘号           | `&times;`  |
  | ÷        | 除号           | `&divide;` |
  | ²        | 平方2（上标2） | `&sup2;`   |
  | ³        | 立方3（上标3） | `&sup3;`   |

## HTML5对比之前版本
- 简化文档声明
- 新增语义标签header,article,aside,footer等
- 新增了canvas绘画元素；
- 新增了用于绘媒介回放的video和audio元素
- 对本地离线存储有更好的支持
- MATHML，SVG等，可以更好的render
- 添加了新的表单控件：calendar、date、time、email等。
- 加强了表单控件功能。
- 提供了一些Javascript API，如地理定位、重力感应、硬件访问等，可以在浏览器内实现类原生应用。
### 文档声明
- <!DOCTYPE html>声明文档的解析类型(document.compatMode)，避免浏览器的怪异模式。比HTML4简化。
### document.compatMode
- BackCompat：怪异模式，浏览器使用自己的怪异模式解析渲染页面。
- CSS1Compat：标准模式，浏览器使用W3C的标准解析渲染页面。

