// 确定类型1
let arr1: number[] = [1, 2, 3]
let arr2: string[] = ["1", "2", "3"]
let arr3: (number | string)[] = [1, "2", 3]

// 确定类型2
let arr: Array<number> = [1, 2, 3]
let arr4: Array<number | string> = [1, "2", 3]

// 泛型
type ArrType<T> = Array<T>
let arr5: ArrType<number> = [1, 2, 3]
let arr6: Array<number | string> = [1, "2", 3]

// 接口
interface treeNode {
    id: string;
    children: treeNode[]
}
const node: treeNode[] = [{ id: '112121', children: [] }]
const node2: treeNode[] = [{ id: '112121', children: [{ id: '112121', children: [] }] }]