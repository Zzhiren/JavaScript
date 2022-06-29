console.log('promise和setTimeout的执行顺序.js')

console.log(100)

setTimeout(() => {
  console.log(200)
})

Promise.resolve().then(() => {
  console.log(300)
})

console.log(400)

// 100 300 400 200