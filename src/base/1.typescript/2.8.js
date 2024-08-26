"use strict";
// 1.使用案例
let value;
value = true; // OK
value = 42; // OK
// 2.任何类型都可以赋值为`unknown`类型。它是`any`类型对应的安全类型
let unknown;
unknown = "aaa";
unknown = 11;
let currentVal = true;
function getVal() {
    while (true) {
    }
}
let knownVal = 'dddd';
let interVal = null;
