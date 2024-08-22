// 1.定义
function cloneDeep(data: any) {
    return JSON.parse(JSON.stringify(data))
}
// 2.使用
const cloneObj = cloneDeep({ key: 1, value: [{ id: 4 }] })

const cloneArr = cloneDeep([1, 2, 4, { key: [1, 2, 3] }])
