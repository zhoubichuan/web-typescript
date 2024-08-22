// 1.定义
enum USER_ROLE {
  USER, // 默认从0开始
  ADMIN,
  MANAGER,
}
// 2.使用
console.log(USER_ROLE[0])
console.log(USER_ROLE.USER)

//异构枚举
enum USER_ROLE2 {
  USER = "user",
  ADMIN = 1,
  MANAGER,
}
console.log(USER_ROLE2.USER)

// 常量枚举
const enum USER_ROLE3 {
  USER,
  ADMIN,
  MANAGER,
}
console.log(USER_ROLE3.USER)