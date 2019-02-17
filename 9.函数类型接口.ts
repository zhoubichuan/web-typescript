//函数类型接口：对方法出入的参数，以及返回值进行约束

//加密的函数类型接口

interface encrypt {
  (key: string, value: string): string;
}
var md5: encrypt = function(key: string, value: string): string {
  //模拟操作
  return key + value;
};
console.log(md5("name", "张三"));

var sha1: encrypt = function(key: string, value: string): string {
  //模拟操作
  return key + "--" + value;
};
console.log(sha1("name", "李四"));
