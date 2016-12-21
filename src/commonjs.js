document.writeln('hello commonjs webpack')
var a = require('./nomodule.js'); //nomodule.js是个倒霉鬼，处处被引用，然后什么也没干😄😝
// AMD动态require，bundle进行分片
require(["./nomodule", "./amd"], function(a, b) {
    // ...
});
module.exports = {
	commonjs:'i`m commonjs module'
}