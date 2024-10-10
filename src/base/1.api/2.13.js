"use strict";
// 1.定义
var USER_ROLE;
(function (USER_ROLE) {
    USER_ROLE[USER_ROLE["USER"] = 0] = "USER";
    USER_ROLE[USER_ROLE["ADMIN"] = 1] = "ADMIN";
    USER_ROLE[USER_ROLE["MANAGER"] = 2] = "MANAGER";
})(USER_ROLE || (USER_ROLE = {}));
// 2.使用
console.log(USER_ROLE[0]);
console.log(USER_ROLE.USER);
//异构枚举
var USER_ROLE2;
(function (USER_ROLE2) {
    USER_ROLE2["USER"] = "user";
    USER_ROLE2[USER_ROLE2["ADMIN"] = 1] = "ADMIN";
    USER_ROLE2[USER_ROLE2["MANAGER"] = 2] = "MANAGER";
})(USER_ROLE2 || (USER_ROLE2 = {}));
console.log(USER_ROLE2.USER);
console.log(0 /* USER_ROLE3.USER */);
