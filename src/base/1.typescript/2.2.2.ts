const num1 = Number.MAX_SAFE_INTEGER + 1
const num2 = Number.MAX_SAFE_INTEGER + 2
console.log(num1 === num2) // true
let max: bigint = BigInt(Number.MAX_SAFE_INTEGER)
console.log(max + BigInt(1) === max + BigInt(2))