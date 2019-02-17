"use strict";
//函数类型接口：对方法出入的参数，以及返回值进行约束
var md5 = function (key, value) {
    //模拟操作
    return key + value;
};
console.log(md5("name", "张三"));
var sha1 = function (key, value) {
    //模拟操作
    return key + "--" + value;
};
console.log(sha1("name", "李四"));
