declare global {
  interface String {
    double(): string
  }
  interface Window {
    myname: string
  }
  var $NAME: string
}
globalThis.$NAME = "张三" //var $NAME: string 中必须是 var，不能是 const 或 let
