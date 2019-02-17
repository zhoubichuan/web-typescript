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
var Person = /** @class */ (function () {
    function Person(n) {
        //构造函数 实例化类的时候触发的方法
        this.name = n;
    }
    Person.prototype.run = function () {
        alert(this.name);
    };
    return Person;
}());
var p = new Person("张三");
p.run();
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    Person2.prototype.setName = function (name) {
        this.name = name;
    };
    return Person2;
}());
var p2 = new Person2("张三");
alert(p2.getName());
p2.setName("李四");
alert(p2.getName());
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    Person3.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person3;
}());
var p3 = new Person3("王五");
alert(p3.run());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    return Web;
}(Person3));
var w = new Web("李四");
alert(w.run());
//ts中继承的探讨 父类的方法和子类的方法一致
var Person4 = /** @class */ (function () {
    function Person4(name) {
        this.name = name;
    }
    Person4.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person4;
}());
var p4 = new Person("王五");
alert(p4.run());
var Web4 = /** @class */ (function (_super) {
    __extends(Web4, _super);
    function Web4(name) {
        return _super.call(this, name) || this;
    }
    Web4.prototype.run = function () {
        return "" + this.name;
    };
    Web4.prototype.work = function () {
        alert(this.name + "\u5728\u5DE5\u4F5C");
    };
    return Web4;
}(Person4));
var w4 = new Web4("李四");
alert(w4.run());
w4.work();
alert(w4.run());
//类里面的修饰符 typescirpt里面定义属性的时候给我们提供了三种修饰符
/*
* public：公有 在当前类里面、子类、类外面都可以访问
* protected：保护类型 在当前类里面、子类里面可以访问，在类外部没法访问
* private：私有 在当前类里面可以访问，子类、类外部没法访问
属性如果不加修饰符 默认就是 公有（public）
*/
//public：公有 在类里面、子类、类外面都可以访问
var Person5 = /** @class */ (function () {
    function Person5(name) {
        this.name = name;
    }
    Person5.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person5;
}());
var p5 = new Person5("王五");
alert(p5.run());
var Web5 = /** @class */ (function (_super) {
    __extends(Web5, _super);
    function Web5(name) {
        return _super.call(this, name) || this;
    }
    Web5.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8-\u5B50\u7C7B";
    };
    Web5.prototype.work = function () {
        alert(this.name + "\u5728\u5DE5\u4F5C");
    };
    return Web5;
}(Person));
var w5 = new Web5("李四");
w5.work();
//类外部访问公有属性
var Person6 = /** @class */ (function () {
    function Person6(name) {
        this.name = name;
    }
    Person6.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person6;
}());
var p6 = new Person("asdfa");
alert(p6.name);
//protected: 保护类型 在类里面、子类里面可以访问 ，在类外部没法访问
var Person7 = /** @class */ (function () {
    function Person7(name) {
        this.name = name;
    }
    Person7.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person7;
}());
var p7 = new Person7("王五");
alert(p7.run());
var Web7 = /** @class */ (function (_super) {
    __extends(Web7, _super);
    function Web7(name) {
        return _super.call(this, name) || this;
    }
    Web7.prototype.work = function () {
        alert("" + this.name);
    };
    return Web7;
}(Person7));
var w7 = new Web7("lisonasd");
w7.work();
alert(w7.run());
//类外部没法访问保护类型的属性
var Person8 = /** @class */ (function () {
    function Person8(name) {
        this.name = name;
    }
    Person8.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person8;
}());
var p8 = new Person8("hahahha");
// alert(p8.name);
//private:私有 在类里面可以访问，子类、类外部都没法访问
var Person9 = /** @class */ (function () {
    function Person9(name) {
        this.name = name;
    }
    Person9.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person9;
}());
var p9 = new Person9("hahahha");
alert(p9.run());
var Web9 = /** @class */ (function (_super) {
    __extends(Web9, _super);
    function Web9(name) {
        return _super.call(this, name) || this;
    }
    Web9.prototype.work = function () {
        // console.log(`${this.name}在工作`);
    };
    return Web9;
}(Person9));
