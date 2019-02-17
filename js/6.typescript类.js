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
//静态属性 静态方法
var Per = /** @class */ (function () {
    function Per(name) {
        this.name = name;
    }
    Per.prototype.run = function () {
        alert(this.name + "\u5728\u8FD0\u52A8");
    };
    Per.prototype.work = function () {
        alert(this.name + "\u5728\u5DE5\u4F5C");
    };
    Per.print = function () {
        alert("pring方法");
    };
    return Per;
}());
var pe = new Per("张三");
pe.run();
Per.print();
//多态：父类定义一个不去实现的方法，让继承他的子类去实现，每一个子类有不同的表现
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log("吃的方法");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + "吃粮食";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + "吃老鼠";
    };
    return Cat;
}(Animal));
//抽象方法：抽象类中的抽象方法不包含具体的实现并且必须在派生中实现
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    return Animal2;
}());
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    //抽象类的子类必须实现抽象类里面的抽象方法
    function Dog2(name) {
        return _super.call(this, name) || this;
    }
    Dog2.prototype.eat = function () {
        console.log(this.name + "吃粮食");
    };
    return Dog2;
}(Animal2));
var d = new Dog2("小黑");
d.eat();
var Cat2 = /** @class */ (function (_super) {
    __extends(Cat2, _super);
    function Cat2(name) {
        return _super.call(this, name) || this;
    }
    Cat2.prototype.eat = function () {
        console.log(this.name + "吃老鼠");
    };
    return Cat2;
}(Animal2));
var c2 = new Cat2("小花");
c2.eat();
