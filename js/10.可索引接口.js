"use strict";
//可索引接口；数组，对象的约束（不常用）
var arr = [12, 1212];
var arr1 = ["1212", "3252"];
var _arr = ["aaa", "bbb"];
console.log(_arr[0]);
var arr_ = { name: "20" };
var Dog3 = /** @class */ (function () {
    function Dog3(name) {
        this.name = name;
    }
    Dog3.prototype.eat = function () {
        console.log(this.name + "吃粮食");
    };
    return Dog3;
}());
var d3 = new Dog3("小黑");
d3.eat();
var Cat3 = /** @class */ (function () {
    function Cat3(name) {
        this.name = name;
    }
    Cat3.prototype.eat = function (food) {
        console.log(this.name + "吃" + food);
    };
    return Cat3;
}());
var c3 = new Cat3("小花");
c3.eat("老鼠");
