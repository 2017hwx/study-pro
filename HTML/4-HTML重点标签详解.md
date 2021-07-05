## head信息
- title标题
- script,style
- link
- base 基础链接
- meta元信息
### http-equiv 
把 content 属性关联到 HTTP 头部。
- content-type 
- HTML 4.01：`<meta http-equiv="content-type" content="text/html; charset=UTF-8">`
- HTML5:`<meta charset="UTF-8">`
- refresh:30秒刷新`<meta http-equiv="refresh" content="30">`
- expires:30秒session过期`<meta http-equiv="expires" content="30">`
- set-cookie:`<meta http-equiv="set-cookie" content="hwx">`
### name `<meta http-equiv="keywords" content="HTML CSS">`
- author:作者
- description：描述
- keywords:关键字
- generator:网页生成信息
- revised:版权信息
- others

## form表单
- name
- action地址
- method：get/post
- autocomplete自动填充历史
- enctype：post时编码：application/x-www-form-urlencoded,multipart/form-data,text/plain
- target规定在何处打开 action URL
- novalidate不验证
- accept-charset
- rel
### 关于 GET 的注意事项：
- 添加到URL后面，4k字节
- 不要发送敏感数据
- 添加为书签的表单提交很有用
### 关于 POST 的注意事项：
- 将表单数据附加在 HTTP 请求的正文中
- POST 没有大小限制，可用于发送大量数据。
- 无法添加书签
## input
| 属性名         | 值                                                                 | 描述                                                              |
| -------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------- |
| name           | field_name                                                         | 定义 input 元素的名称。                                           |
| type           | button,checkbox,file,hidden,image,password,radio,reset,submit,text  新color,date,datetime,datetime-local,email,month,number,range,search,tel,time,url,week| 规定 input 元素的类型。                                           |
| value          | value                                                              | 规定 input 元素的值。                                             |
| accept         | mime_type                                                          | 规定通过文件上传来提交的文件的类型。                              |  |
| autocomplete   | on off                                                             | 规定是否使用输入字段的自动完成功能。                              |
| autofocus      | autofocus                                                          | 规定输入字段在页面加载时是否获得焦点。（不适用于 type="hidden"）  |
| checked        | checked                                                            |
| disabled       | disabled                                                           |
| readonly       | readonly                                                           | 规定输入字段为只读。                                              |
| required       | required                                                           | 指示输入字段的值是必需的。                                        |
| step           | number                                                             | 规定输入字的的合法数字间隔。                                      |
| max            | number,date                                                        | 规定输入字段的最大值。请与 "min" 属性配合使用。                   |
| min            | number,date                                                        | 规定输入字段的最小值。                                            |
| maxlength      | number                                                             | 规定输入字段中的字符的最大长度。                                  |
| list           | datalist-id                                                        | 引用包含输入字段的预定义选项的 datalist 。                        |
| multiple       | multiple                                                           | 如果使用该属性，则允许一个以上的值。                              |
| pattern        | regexp_pattern                                                     | 规定输入字段的值的模式或格式。例如 pattern="[0-9]"                |
| placeholder    | text                                                               | 规定帮助用户填写输入字段的提示。                                  |  |
| size           | number_of_char                                                     | 定义输入字段的宽度。                                              |
| src            | URL                                                                | 定义以提交按钮形式显示的图像的 URL。                              |  |
| alt            | text                                                               | 定义图像输入的替代文本。                                          |
| width          | pixels,%                                                           | 定义 input 字段的宽度。（适用于 type="image"）                    |
| height         | pixels,%                                                           | 定义 input 字段的高度。（适用于 type="image"）                    |
| form           | formname                                                           | 规定输入字段所属的一个或多个表单。                                |
| formaction     | URL                                                                | 覆盖表单的 action 属性。（适用于 type="submit" 和 type="image"）  |
| formenctype    |                                                                    | 覆盖表单的 enctype 属性。（适用于 type="submit" 和 type="image"） |
| formmethod     | get post                                                           | 覆盖表单的 method 属性。（适用于 type="submit" 和 type="image"）  |
| formnovalidate | formnovalidate                                                     | 覆盖表单的 novalidate 属性。                                      |
| formtarget     | _blank,_self,_parent,_top,framename                                | 覆盖表单的 target 属（适用于 type="submit" 和 type="image"）      |
### datalist标签
- input list属性配合使用
```html
<input list="browsers"  type="text" name="input2" id="input2">
<datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
</datalist>
```

