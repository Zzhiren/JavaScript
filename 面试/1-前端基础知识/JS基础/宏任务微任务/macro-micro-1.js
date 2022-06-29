console.log(100)

setTimeout(() => {
  console.log(200)
})

Promise.resolve().then(() => {
  console.log(300)
}).then(() => {
  console.log(400)
})

console.log(500)