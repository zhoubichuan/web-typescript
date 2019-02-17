//接口 行为和动作的规范，对批量方法进行约束
interface FullName {
  firstName: string;
  secondName: string;
}
function printName(name: FullName) {
  console.log(name.firstName + "--" + name.secondName);
}
function printInfo(info: FullName) {
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

//接口：可选属性
interface FullName2 {
  firstName: string;
  secondName?: string;
}
function getName(name: FullName2) {
  console.log(name);
}
getName({
  secondName: "secondName",
  firstName: "firstName"
});
getName({
  firstName: "firstName"
});
