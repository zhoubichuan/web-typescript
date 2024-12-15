"use strict";
// 数字枚举:除了⽀持 从成员名称到成员值 的普通映射之外，它还⽀持 从成员值到成员名称 的反向映射
var USER_ROLE;
(function (USER_ROLE) {
    USER_ROLE[USER_ROLE["USER"] = 0] = "USER";
    USER_ROLE[USER_ROLE["ADMIN"] = 1] = "ADMIN";
    USER_ROLE[USER_ROLE["MANAGER"] = 2] = "MANAGER";
})(USER_ROLE || (USER_ROLE = {}));
console.log(USER_ROLE[0]);
console.log(USER_ROLE.USER);
//异构枚举:异构枚举的成员值是数字和字符串的混合
var USER_ROLE2;
(function (USER_ROLE2) {
    USER_ROLE2["USER"] = "user";
    USER_ROLE2[USER_ROLE2["ADMIN"] = 1] = "ADMIN";
    USER_ROLE2[USER_ROLE2["MANAGER"] = 2] = "MANAGER";
})(USER_ROLE2 || (USER_ROLE2 = {}));
console.log(USER_ROLE2.USER);
console.log(0 /* USER_ROLE3.USER */);
