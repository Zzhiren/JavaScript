// require导入对文件的要求
// 支持 .js文件以 module.exports = {} 和 exports.xxx = {} 方式到处
// 支持 JSON 文件到处，通过 JSON.parse
// 其他文件格式均以 js 文件到处，且必须符合js文件到处要求
const utils = require('./utils');
const name = require('./name');
const txt = require('./txt.txt');
utils.check();
console.log(name)
console.log(txt)