| 标签名称       | 版本 | 自闭 | 描述                                               | 备注                                                                                          |
| -------------- | ---- | ---- | -------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `<!DOCTYPE>`   |      |      | 定义文档类型。                                     |
| `<html>`       |      |      | 定义 HTML 文档。                                   |
| `<head>`       |      |      | 定义关于文档的信息。                               |
| `<title>`      |      |      | 定义文档的标题。                                   |
| `<body>`       |      |      | 定义文档的主体。                                   |
| `<h1>~<h6>`    |      |      | 定义 HTML 标题。                                   |
| `<p>	`         |      |      | 定义段落。                                         |
| `<br>`         |      |      | 定义简单的折行。                                   |
| `<hr>`         |      |      | 定义水平线。                                       |
| `<!--...-->`   |      |      | 定义注释。                                         | 条件注释`<!--[if IE 8]><![endif]-->`                                                          |
| **元信息**     |      |      |                                                    |
| `<head>`       |      |      | 定义关于文档的信息。                               |
| `<meta>`       |      |      | 定义关于 HTML 文档的元信息。                       |
| `<base>`       |      |      | 定义页面中所有链接的默认地址或默认目标。           | `<a>、<img>、<link>、<form>`相对路径前缀，href、target两属性                                  |
| **样式和语义** |      |      |                                                    |
| `<style>`      |      |      | 定义文档的样式信息。                               |
| `<div>`        |      |      | 定义文档中的节。                                   |
| `<span>`       |      |      | 定义文档中的节。                                   |
| `<header>`     |      |      | 定义 section 或 page 的页眉。                      |
| `<footer>`     | 5    |      | 定义 section 或 page 的页脚。                      | `<footer>` 元素内的联系信息应该位于 `<address>` 标签中                                        |
| `<main>`       | 5    |      | 定义文档的主要内容。                               |
| `<section>`    | 5    |      | 定义 section。                                     |
| `<article>`    | 5    |      | 定义文章。                                         |
| `<aside>`      | 5    |      | 定义页面内容之外的内容。                           | 侧边栏                                                                                        |
| `<details>`    | 5    |      | 定义元素的细节。                                   | 与 `<summary>` 标签 配合使用                                                                  |
| `<summary>`    | 5    |      | 为 `<details>` 元素定义可见的标题。                |
| `<dialog>`     | 5    |      | 定义对话框或窗口。                                 | open属性                                                                                      |
| `<data>`       |      |      | 用于添加给定内容的机器可读值                       |
| **格式化**     |      |      |                                                    |
| `<pre>`        |      |      | 定义预格式文本。                                   |
| `<abbr>`       |      |      | 定义缩写。                                         |
| `<address>`    |      |      | 定义文档作者或拥有者的联系信息。                   |
| `<blockquote>` |      |      | 定义长的引用。                                     | 属性cite来源url，包含块级元素如`<P>`                                                          |
| `<q>`          |      |      | 定义短的引用。                                     | 属性cite来源url                                                                               |
| `<cite>`       |      |      | 定义引用(citation)。                               |
| `<code>`       |      |      | 定义计算机代码文本。                               |
| `<dfn>`        |      |      | 定义定义项目。                                     |
| `<strong>`     |      |      | 定义语气更为强烈的强调文本。                       |
| `<em>`         |      |      | 定义强调文本。                                     |
| `<samp>`       |      |      | 定义计算机代码样本。                               |
| `<kbd>`        |      |      | 定义键盘文本。                                     |
| `<mark>`       | 5    |      | 定义有记号的文本。                                 |
| `<s>	`         |      |      | 定义加删除线的文本。                               | 不建议使用                                                                                    |
| `<del>`        |      |      | 定义被删除文本。                                   |
| `<ins>`        |      |      | 定义被插入文本。                                   |
| `<sup>`        |      |      | 定义上标文本。                                     |
| `<sub>`        |      |      | 定义下标文本。                                     |
| `<meter>`      | 5    |      | 定义预定义范围内的度量。                           | form,high,low,max,min,optimum,value属性                                                       |
| `<progress>`   | 5    |      | 定义任何类型的任务的进度。                         |
| `<rp>`         | 5    |      | 定义若浏览器不支持 ruby 元素显示的内容。           |
| `<rt>`         | 5    |      | 定义 ruby 注释的解释。                             |
| `<ruby>`       | 5    |      | 定义 ruby 注释。                                   |
| `<template>`   | 5    |      | 定义用作容纳页面加载时隐藏内容的容器。             |
| `<time>`       | 5    |      | 定义日期/时间。                                    | 属性detetime,pubdate                                                                          |
| `<small>`      |      |      | 定义小号文本。                                     |
| `<i>`          |      |      | 定义斜体文本。                                     |
| `<u>`          |      |      | 定义下划线文本。                                   |
| `<b>`          |      |      | 定义粗体文本。                                     |
| `<bdi>`        |      |      | 定义文本的文本方向，使其脱离其周围文本的方向设置。 | Firefox 和 Chrome,dir属性rtl右左/ltr左右/auto                                                 |
| `<bdo>`        |      |      | 定义文字方向。                                     | dir属性rtl右左/ltr左右                                                                        |
| `<var>`        |      |      | 定义文本的变量部分。                               |
| `<wbr>`        | 5    |      | 预判换行                                           |
| **框架**       |      |      |                                                    |
| `<iframe>`     |      |      | 定义内联框架。                                     |
| **编程**       |      |      |                                                    |
| `<script>`     |      |      | 定义客户端脚本。                                   |
| `<noscript>`   |      |      | 定义针对不支持客户端脚本的用户的替代内容。         |
| `<embed>`      | 5    |      | 为外部应用程序（非 HTML）定义容器。                | 属性width,height,src,type                                                                     |
| `<object>`     |      |      | 定义嵌入的对象。                                   | `<param>`一起使用                                                                             |
| `<param>`      |      |      | 定义对象的参数。                                   |
| **连接**       |      |      |                                                    |
| `<a>	`         | 4,5  |      | 定义锚。                                           |
| `<link>`       |      |      | 定义文档与外部资源的关系。                         |
| `<nav>`        | 5    |      |                                                    |
| **图像**       |      |      |                                                    |
| `<img>`        |      |      | 定义图像。                                         | 宽高,src,alt,usemap与`<map>`一起使用,ismap服务器端图像映射,longdesc包含长的图像描述文档的 URL |
| `<map>`        |      |      | 定义图像映射。                                     | id,name                                                                                       |
| `<area>`       |      |      | 定义图像映射中的区域。                             | 嵌套在`<map>`中。coords坐标,shape形状,href,nohref,target                                      |
| `<canvas>`     | 5    |      | 定义图形。                                         |
| `<figcaption>` | 5    |      | 定义 figure 元素的标题。                           | `<figure>`中使用                                                                              |
| `<figure>`     | 5    |      | 定义媒介内容的分组，以及它们的标题。               |
| `<svg>`        |      |      | 定义 SVG 图形的容器。                              |
| **音频/视频**  |      |      |                                                    |
| `<audio>`      | 5    |      | 定义声音内容。                                     |
| `<source>`     | 5    |      | 定义媒介源。                                       | `<audio>``<video>`中定义源                                                                    |
| `<track>`      | 5    |      | 定义用在媒体播放器中的文本轨道。                   | `<video>`中定义字幕文件                                                                       |
| `<video>`      | 5    |      | 定义视频。                                         |
| **form表单**   |      |      |                                                    |
| `<form>`       |      |      | 定义供用户输入的 HTML 表单。                       |
| `<input>`      |      |      | 定义输入控件。                                     |
| `<textarea>`   |      |      | 定义多行的文本输入控件。                           |
| `<button>`     |      |      | 定义按钮。                                         |
| `<select>`     |      |      | 定义选择列表（下拉列表）。                         |
| `<optgroup>`   | 5    |      | 定义选择列表中相关选项的组合。                     |
| `<option>`     |      |      | 定义选择列表中的选项。                             |
| `<label>`      |      |      | 定义 input 元素的标注。                            |
| `<fieldset>`   |      |      | 定义围绕表单中元素的边框。                         |
| `<legend>`     |      |      | 定义 fieldset 元素的标题。                         |
| `<datalist>`   | 5    |      | 定义下拉列表。                                     |
| `<keygen>`     | 5    |      | 定义生成密钥。                                     |
| `<output>`     | 5    |      |
| **列表**       |      |      |                                                    |
| `<ul>`         |      |      | 定义无序列表。                                     |
| `<ol>`         |      |      | 定义有序列表。                                     |
| `<li>`         |      |      | 定义列表的项目。                                   |
| `<dl>`         |      |      | 定义定义列表。                                     |
| `<dt>`         |      |      | 定义定义列表中的项目。                             |
| `<dd>`         |      |      | 定义定义列表中项目的描述。                         |
| **表格**       |      |      |                                                    |
| `<table>`      |      |      | 定义表格                                           |
| `<caption>`    |      |      | 定义表格标题。                                     |
| `<th>`         |      |      | 定义表格中的表头单元格。                           |
| `<tr>`         |      |      | 定义表格中的行。                                   |
| `<td>`         |      |      | 定义表格中的单元。                                 |
| `<thead>`      |      |      | 定义表格中的表头内容。                             |
| `<tbody>`      |      |      | 定义表格中的主体内容。                             |
| `<tfoot>`      |      |      | 定义表格中的表注内容（脚注）。                     |
| `<col>`        |      |      | 定义表格中一个或多个列的属性值。                   |
| `<colgroup>`   |      |      | 定义列分组                                         | width,align对其,valign纵对齐,span操作几个列                                                   |


