"use strict";
var setData = function (value1, value2) {
    return value1 + value2;
};
setData("name", "张三");
var getData2 = function (value) {
    return value;
};
getData2("张三");
function getData3(value) {
    return value;
}
var myGetData3 = getData3;
myGetData3("20");
