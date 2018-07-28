# webpack 基础

现在前端的打包工具很多而webpack是前端用的非常多的一个打包工具，最近准备开始从零重新认识的`webpack`, 理一理关于`webpack`那些事儿。学习之前肯定得先安装咯，但是安装后运行也是遇到了一些坑, 下面简单记录下。如果你使用的是webpack1/2/3可能就没有下面的问题。

1. `webpack-cli` 不存在问题

    安装依赖模块, 使用`npm i webpack`后然后运行总是报错总提示下面的错误：
    > webpack One CLI for webpack must be installed. These are recommended choices, delivered as separate.

    后来查了一下原来默认安装的是webpack4，webpack4中还需要安装webpack-cli，同时也需要在全局安装`webpack` `webpack-cli`模块。

    ```bash
    # 全局安装
    npm i webpack webpack-cli  -g
    # 作为项目依赖安装
    npm i webpack webpack-cli  --save-dev
    ```

2. 重复安装`webpack-cli`和`webpack-command`问题
   > You have installed webpack-cli and webpack-command together. To work with the "webpack" command you need only one CLI package, please remove one of them or use them directly via their binary.

   这个错误说明您已经安装了`webpack-cli`和`webpack-command`。要使用“webpack”命令，您只需要一个CLI包，请删除其中一个或直接通过二进制文件使用它们。

   `npm remove  webpack-cli` 或者 `npm remove webpack-command` 不行的话试试 `npm remove --global webpack-cli`

3. 运行过程中有时候还有有个warning, 需呀添加--mode设置。在配置运行脚本的时候添加`--mode=development`或`--mode=production`即。

  ```javascript
  // package.json
  {
    "scripts": {
      "dev": "webpack --mode=development",
      "build": "webpack --mode=production",
    },
  }
  ```

## 四个核心概念

+ entry
+ output
+ loader
+ plugin


[Webpack 4 不完全迁移指北](https://github.com/dwqs/blog/issues/60)
[Webpack 4 不完全迁移指北](https://github.com/dwqs/blog/issues/60)