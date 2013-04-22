
#介绍
采用Grunt作为构建工具，CSS基本组件使用Sass编写，文档采用Jade构建，Qunit作为JS单元测试工具。所在在参与前，需要了解基本的Sass,Jade,Qunit知识。

#开发环境安装
因为Sass和Compass依赖Ruby环境，所以你首先需要[安装Ruby](http://www.ruby-lang.org/en/downloads/)，安装好以后执行

注意：必须安装1.9.x以上的Ruby版本

```
gem install compass
```
然后从这里[下载NodeJS的安装包](http://nodejs.org/),安装NodeJS.

最后安装Grunt-cli

```
npm install -g grunt-cli
```

这时候你的环境就安装好了。

下载所有源代码，然后在当前目录下使用NodeJS命令

```
npm install
```

## 运行

安装好以后执行

```
grunt
```
浏览器将自动打开预览地址。

## 备注：
[Sass用法指南](http://www.ruanyifeng.com/blog/2012/06/sass.html)

[Compass用法指南](http://www.ruanyifeng.com/blog/2012/11/compass.html)

[Jade模板引擎入门教程](https://github.com/visionmedia/jade/blob/master/Readme_zh-cn.md)