"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function () {
        console.log();
    };
    return Programmer;
}());
var _Web4 = /** @class */ (function (_super) {
    __extends(_Web4, _super);
    function _Web4(name) {
        return _super.call(this, name) || this;
    }
    _Web4.prototype.eat = function () {
        console.log(this.name + "喜欢吃馒头");
    };
    _Web4.prototype.work = function () {
        console.log(this.name + "写代码");
    };
    return _Web4;
}(Programmer));
var _w5 = new _Web4("小李");
_w5.work();
