# hello webpack

主要有入口、出口、loader、插件几个主要部分。

entry的几种写法：

单个入口（简写）语法

```javascript
const config = {
  entry: './src/app.js'
};
/* 上面的是简写，下面的是完整写法
  const config = {
    entry: {
      main: './path/to/my/entry/file.js'
    }
  };
 */
module.exports = config;
```

entry 对象语法：`entry: {[entryChunkName: string]: string|Array<string>}`

这种方式通常用于 **分离 应用程序(app) 和 第三方库(vendor) 入口**

```javascript
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
};
module.exports = config;
```

多页面应用

```javascript
const config = {
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
};
module.exports = config;
```

```json
{
  "scripts": {
    "predev": "rimraf dist_dev",
    "dev": "webpack --mode=development",
    "prebuild": "rimraf dist",
    "build": "webpack --mode=production",
    "clean": "rimraf dist*"
  }
}
```

先看下本例中package.json中的配置

1. `rimraf dist`删除dist文件
2. `prebuild`中pre打头的为npm提供的钩子函数。
3. `webpack --mode=development`用来设置webpack编译模式。
4. npm提供了一个`npm_lifecycle_event`返回当前正在运行的脚本名称，可以在webpack.config.js中使用`const TARGET = process.env.npm_lifecycle_event`获取到该值。运行变量的类型也可以通过自定义变量设置`{ "build": "cross-env NODE_ENV=production webpack", }`。
5. webpack.config.js根据环境配置了运行不同环境的配置。

[npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)