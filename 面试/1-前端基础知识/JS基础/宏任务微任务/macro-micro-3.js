
// 同步代码、微任务、DOM渲染、宏任务 执行顺序

async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
  alert('async1')
}

async function async2() {
  console.log('async2')
}

function createEle() {
  const p = document.createElement('p')
  p.innerHTML = '我是p标签'
  document.body.append(p)
}

console.log('script start')

setTimeout(() => {
  alert('setTimeout')
  console.log('setTimeout')
})

async1()
createEle()

new Promise(resolve => {
  console.log('promise1')
  alert('promise1')
  resolve()
}).then(() => {
  console.log('promise2')
  alert('promise2')
})

console.log('script end')
