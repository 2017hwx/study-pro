### 样式权重
  - 内联样式》内部样式、外部样式
### inherit继承 initial默认  unset自动继承或默认 
- 所有元素可继承：visibility 和 cursor
- 内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、 font-family、font-size、font-style、font-variant、font-weight、text- decoration、text-transform、direction
- 块状元素可继承：text-indent和text-align
- 列表元素可继承：list-style、list-style-type、list-style-position、list-style-image
- 表格元素可继承：border-collapse
### background
- background-color
- background-image:url('')
- background-repeat水平或垂直平铺,默认都平铺
- background-attachment
- background-position
### font text
- font-family
- font-size
- font-style，normal、italic斜体、oblique倾斜
- font-weight
- font-variant:small-caps小型大写字母
- line-height
- direction,ltr默认、rtl、inherit
- unicode-bidi:bidi-override;设置或返回文本是否被重写 
- text-align,left\right\center\justify每一行被展开为宽度相等，左，右外边距是对齐
- text-decoration:overline上划线\line-thtough中划线\underline下划线\none
- text-indent:50px;文本缩进属性是用来指定文本的第一行的缩进。
- letter-spacing:2px；字符间距
- word-spacing:30px;字间距
- text-shadow:2px 2px 10px blue;阴影x,y,模糊距离，模糊颜色
- text-transform：capitalize驼峰，uppercase大写，lowercase小写
- vertical-align:text-top;垂直对齐
- white-space:nowrap;空白处理方式

###　链接样式
- a:link {color:#000000;}  /* 未访问链接*/
- a:visited {color:#00FF00;}  /* 已访问链接 */
- a:hover {color:#FF00FF;}  /* 鼠标移动到链接上 */
- a:active {color:#0000FF;}  /* 鼠标点击时 */
### 列表样式
- ul.a {list-style-type:circle;} 圆
- ul.b {list-style-type:square;} 方
- ol.c {list-style-type:upper-roman;} 
- ol.d {list-style-type:lower-alpha;} a,b,c
- list-style-image: url('sqpurple.gif');

### table样式
- border: 1px solid black;
- border-collapse:collapse折叠边框

## 盒子模型
- margin,padding,border,content
- border-width
- border-color
- outline-width
- outline-color
- border-radius
- box-shadow
- border-image
### border-style outline-style
- dotted: 定义一个点线边框
- dashed: 定义一个虚线边框
- solid: 定义实线边框
- double: 定义两个边框。 两个边框的宽度和 border-width 的值相同
- groove: 定义3D沟槽边框。效果取决于边框的颜色值
- ridge: 定义3D脊边框。效果取决于边框的颜色值
- inset:定义一个3D的嵌入边框。效果取决于边框的颜色值
- outset: 定义一个3D突出边框。 效果取决于边框的颜色值
### display
- display:inline行
- display:block块
- display:inline-block -- 显示为内联块元素，表现为同行显示并可修改宽高内外边距等属性，li
- display:none;脱离文档流visibility:hidden;占有原文档流

