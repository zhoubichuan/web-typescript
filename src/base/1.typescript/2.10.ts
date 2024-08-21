function error(message: string): never {
    throw new Error("err")
  }
  function loop(): never {
    while (true) {}
  }
  function fn(x: number | string) {
    if (typeof x === "number") {
      console.log('number')
    } else if (typeof x === "string") {
      console.log('string')
    } else {
      console.log(x) //never
    }
  }