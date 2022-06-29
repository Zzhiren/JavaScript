const prefix = 'promise讲解-3'
const p1 = Promise.resolve().then(() => {
  console.log(`${prefix}, p1.then()`)
})

p1.then(() => {
  console.log(`${prefix}, p1.then().then()`)
})

const p2 = Promise.resolve().catch(() => {
  // 因为resolve 返回resolved状态，后续执行then，所以不会进入当前catch
  console.log(`${prefix}, p2.catch()`)
  throw new Error(`${prefix}, p2.catch()`)
})

p2.then((data) => {
  console.log(`${prefix}, p2.catch().then()`, data)
}).catch(err => {
  console.log(`${prefix}, p2.catch().catch()`, err)
})

