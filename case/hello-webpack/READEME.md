# hello webpack

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