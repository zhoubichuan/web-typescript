enum USER_ROLE {
    USER, // 默认从0开始
    ADMIN,
    MANAGER,
  }
  // {0: "USER", 1: "ADMIN", 2: "MANAGER", USER: 0, ADMIN: 1, MANAGER: 2}

  //异构枚举
  enum USER_ROLE {
    USER = "user",
    ADMIN = 1,
    MANAGER,
  }

  // 常量枚举
  const enum USER_ROLE {
    USER,
    ADMIN,
    MANAGER,
  }