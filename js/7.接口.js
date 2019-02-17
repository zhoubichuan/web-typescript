"use strict";
function printName(name) {
    console.log(name.firstName + "--" + name.secondName);
}
function printInfo(info) {
    console.log(info.firstName + info.secondName);
}
var obj = {
    age: 28,
    firstName: "zhang",
    secondName: "san"
};
printName(obj);
var obj2 = {
    age: 28,
    firstName: "zhang",
    secondName: "san"
};
printInfo(obj2);
function getName(name) {
    console.log(name);
}
getName({
    secondName: "secondName",
    firstName: "firstName"
});
getName({
    firstName: "firstName"
});
