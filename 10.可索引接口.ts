//可索引接口；数组，对象的约束（不常用）
var arr: number[] = [12, 1212];
var arr1: Array<string> = ["1212", "3252"];

interface UserArr {
  [index: number]: string;
}
var _arr: UserArr = ["aaa", "bbb"];
console.log(_arr[0]);

//可索引接口 对对象的约束
interface UserObj {
  [index: string]: string;
}
var arr_: UserObj = { name: "20" };

//类类型接口 对类的约束 和 抽象类优点相似
interface Animal3 {
  name: string;
  eat(str: string): void;
}
class Dog3 implements Animal3 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log(this.name + "吃粮食");
  }
}
var d3 = new Dog3("小黑");
d3.eat();

class Cat3 implements Animal3 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat(food: string) {
    console.log(this.name + "吃" + food);
  }
}
var c3 = new Cat3("小花");
c3.eat("老鼠");
