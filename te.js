var assert = require("should");
var fs = require("fs");

describe('同步测试', function() {
    it('数组测试', function() {
        assert.equal(-1, [1, 2, 3].indexOf(5));
        assert.equal(-1, [1, 2, 3].indexOf(0));
    })

    it('字符串合法性测试', function() {
        assert.equal("123", "123");
    })
})


describe('异步测试', function() {
    it('异步读取文件', function(done) {
        // index.js请自行添加，测试用例会读取里面的内容并比较
        fs.readFile("index.js", "utf8", function(err, data){
            data.should.eql("test");
            done();
        })
    })
})
