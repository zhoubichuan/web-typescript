interface ConfigFn {
  (value1: string, value2: string): string;
}
var setData: ConfigFn = function(value1: string, value2: string): string {
  return value1 + value2;
};
setData("name", "张三");

interface ConfigFn2 {
  <T>(value: T): T;
}
var getData2: ConfigFn2 = function<T>(value: T): T {
  return value;
};
getData2<string>("张三");
// getData2<string>(1234);

interface ConfigFn3<T> {
  (value: T): T;
}
function getData3<T>(value: T): T {
  return value;
}
var myGetData3: ConfigFn3<string> = getData3;
myGetData3("20");
