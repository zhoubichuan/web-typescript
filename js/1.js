"use strict";
console.log("helloworld");
var str = "你好";
function getData() { }
var flag = true;
console.log(flag);
var num = 1234;
console.log(num);
var str = "this is ts";
str = "haha";
console.log(str);
var arr = [11, 22, 33];
console.log(arr);
var arr2 = [11, 22, 33];
console.log(arr2);
var arr3 = [123, "this is ts"];
console.log(arr3);
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
var s = Flag.success;
console.log(s);
var Flag2;
(function (Flag2) {
    Flag2[Flag2["success"] = 0] = "success";
    Flag2[Flag2["error"] = 2] = "error";
})(Flag2 || (Flag2 = {}));
var f = Flag.error;
console.log(f);
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 1] = "red";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
var c = Color.red;
console.log(c);
var Err;
(function (Err) {
    Err[Err["undefined"] = -1] = "undefined";
    Err[Err["null"] = -2] = "null";
    Err[Err["success"] = 1] = "success";
})(Err || (Err = {}));
var e = Err.success;
console.log(e);
function run() {
    return "run";
}
var fun2 = function () {
    return 123;
};
alert(fun2());
function getInfo(name, age) {
    return name + " --- " + age;
}
alert(getInfo("zhangsna", 20));
var getInfo2 = function (name, age) {
    return name + "---" + age;
};
function run2() {
    console.log("run");
}
run2();
function getInfo3(name, age) {
    if (age) {
        return name + " --- " + age;
    }
    else {
        return name + " ---\u5E74\u9F84\u4FDD\u5BC6";
    }
}
alert(getInfo3("zhangsan"));
alert(getInfo3("zhangsan", 123));
function getInfo4(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return name + " --- " + age;
    }
    else {
        return name + " --- \u5E74\u9F84\u4FDD\u5BC6";
    }
}
alert(getInfo4("张三"));
alert(getInfo4("张三", 30));
function sum(a, b, c, d) {
    return a + b + c + d;
}
alert(sum(1, 2, 3, 4));
function sum2() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
alert(sum2(1, 2, 3, 4, 5, 6));
function sum3(a, b) {
    var result = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        result[_i - 2] = arguments[_i];
    }
    var sum = a + b;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
alert(sum3(1, 23, 4, 45, 5));
function getInfo6(str) {
    if (typeof str == "string") {
        return "我叫：" + str;
    }
    else {
        return "我的年龄是：" + str;
    }
}
setTimeout(function () {
    alert("run");
}, 1000);
