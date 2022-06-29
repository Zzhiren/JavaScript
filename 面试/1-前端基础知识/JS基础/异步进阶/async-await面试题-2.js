(async function() {
  try {
    console.log('async-await面试题-2.js')
    console.log('start')
    const a = await 100
    console.log('a', a)
    const b = await Promise.resolve(200)
    console.log('b', b)
    const c = await Promise.reject(300)
    console.log('c', c)
    console.log('end')
  } catch (e) {
    console.log('catch')
    console.log(e)
  }
})()