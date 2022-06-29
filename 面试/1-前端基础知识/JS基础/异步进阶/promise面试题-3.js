// 第三题
console.log('=======================')
Promise.resolve().then(() => {
  console.log(1)
  throw new Error('error1')
}).catch(() => {
  console.log(2)
}).catch(() => {
  console.log(3)
})