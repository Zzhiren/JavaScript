console.log('async-await面试题-1.js')
async function fn() {
  return 100
}

(async function() {
  const a = fn()
  console.log('a', a)
  const b = await fn()
  console.log('b', b)
})()