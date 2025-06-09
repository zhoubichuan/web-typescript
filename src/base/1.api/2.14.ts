// 数字枚举:除了⽀持 从成员名称到成员值 的普通映射之外，它还⽀持 从成员值到成员名称 的反向映射
enum USER_ROLE {
  USER, // 默认从0开始
  ADMIN,
  MANAGER,
}
console.log(USER_ROLE[0]) // USER
console.log(USER_ROLE.USER) // 0

enum USER_ROLE1 {
  USER = 5, // 默认从0开始
  ADMIN = 10,
  MANAGER = 20,
}
console.log(USER_ROLE1[5]) //  USER
console.log(USER_ROLE1.USER) // 5

//异构枚举:异构枚举的成员值是数字和字符串的混合
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