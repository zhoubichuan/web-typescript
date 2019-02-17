"use strict";
/* 泛型：可以支持不特定的数据类型。要求：传入的参数和返回的参数一致 */
function _getData(value) {
    return value;
}
_getData(123);
_getData("1212");
function _getData2(value) {
    return "asdfasd";
}
_getData2(124);
_getData2("asdfasd");
//泛型类：
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var m = new MinClass();
m.add(3);
m.add(22);
alert(m.min());
//类的泛型
var MinClas = /** @class */ (function () {
    function MinClas() {
        this.list = [];
    }
    MinClas.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClas.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClas;
}());
var m1 = new MinClas();
m1.add(12);
m1.add(3);
alert(m1.min());
var m2 = new MinClas();
m2.add("c");
m2.add("a");
m2.add("v");
alert(m2.min());
