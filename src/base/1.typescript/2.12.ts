//1.固定长度类型
let tuple: [string, number, boolean] = ["hello", 10, true]
tuple.push("abc") //在元组中增加数据，只能增加元组中存放的类型

// 固定长度类型
let arr1: number[] = [1, 2, 3]
let arr2: string[] = ["1", "2", "3"]
let arr3: (number | string)[] = [1, "2", 3]

//不定长度类型
let arr: Array<number> = [1, 2, 3]
let arr4: Array<number | string> = [1, "2", 3]