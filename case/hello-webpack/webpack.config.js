const path = require('path')

// 获取运行的是dev还是build
const TARGET = process.env.npm_lifecycle_event;

const parm = process.env.abc;
console.log(parm);

// 公共配置
const common = {
  entry: './src/app.js',
}

// dev环境编译
const dev =Object.assign({}, common, {
  output: {
    path: path.resolve(__dirname, 'dist_dev'),
    filename: 'bundle1.js'
  }
});

// build环境编译
const build =Object.assign({}, common, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  }
});

module.exports = TARGET === 'dev' ? dev : build;