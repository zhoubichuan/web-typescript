// 1.使用案例
let value: unknown
value = true // OK
value = 42 // OK

// 2.任何类型都可以赋值为`unknown`类型。它是`any`类型对应的安全类型
let unknown: unknown;
unknown = "aaa";
unknown = 11;

// 3.never 是`unknown`的子类型
type isNever = never extends unknown ? true : false;
let currentVal: isNever = true;

// 4.keyof unknown 是 never
type key = keyof unknown;
function getVal(): key {
    while (true) {

    }
}
// 5.unknown 类型不能被遍历
type IMap<T> = {
    [P in keyof T]: number;
};
type t = IMap<unknown>;

// 6.unknown 类型不能和 number 类型进行`+`运算，可以用于等或不等操作

// 7.联合类型中的`unknown`：联合类型与`unknown`都是`unknown`类型
type UnionUnknown = unknown | null | string | number;
let knownVal: UnionUnknown = 'dddd'

// 8.交叉类型中的`unknown`：交叉类型与`unknown`都是其他类型
type inter = unknown & null;
let interVal: inter = null