# webpack loader

设置规则, [官方说明](https://webpack.docschina.org/concepts/#loader)

```javascript
const path = require('path');

const config = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
module.exports = config;
```

本例相关运行 **报错处理**

[原示例](https://github.com/FE-star/showcase5/tree/master/cases/loader)

由于本地webpack已经升级到webpack4, 运行此项目各种报错 -_-!

1. Windows上路径报错。通过`path`的相关方法保证不同系统之间的兼容。

    ```javascript
    /* webpack.config.js */
    const path = require('path');
    module.exports = {
      /* ... */
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      }
    }
    ```
2. babel升级后`.babelrc`配置升级, [参考](http://babeljs.io/docs/en/env/)

    > npm WARN deprecated babel-preset-es2015@6.24.1: ????  Thanks for using Babel: we recommend using babel-preset-env now: please read babeljs.io/env to update!

    ```json
    // .babelrc
    {
      "presets": ["env"]
    }
    ```
3. `/src/index.js`注意ES6中的语法规范

    ```javascript
    export default class HelloWorld {
      salute() {
        return console.log('Hello World!');
      }
    }
    ```
4. `babel-loader`升级, 之前总是报下面的错误。升级后为 `{ "babel-loader": "7.1.5" }`

    > Module build failed (from ./node_modules/babel-loader/lib/index.js):
    >
    > TypeError: Cannot read property 'babel' of undefined