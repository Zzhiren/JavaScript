function bindEvent(elem, type, fn) {
  elem.addEventListener && elem.addEventListener(type, fn)
}

const p1 = document.getElementById('p1')
const body = document.body

bindEvent(body, 'click', event => {
  console.log(event.target) // 点击p标签此处打印的回事p标签
  console.log('body')
})

bindEvent(p1, 'click', event => {
  event.stopPropagation() // 阻止冒泡
  console.log(event.target)
  console.log('激活')
})