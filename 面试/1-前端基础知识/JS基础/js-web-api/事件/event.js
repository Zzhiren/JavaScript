function bindEvent(elem, type, fn) {
  elem.addEventListener && elem.addEventListener(type, fn)
}

const body = document.body
const btn1 = document.getElementById('btn1')

// bindEvent(btn1, 'click', event => {
//   console.log(event.target)
//   event.preventDefault() // 阻止默认行为
//   console.log('clicked')
// })

bindEvent(body, 'click', event => {
  console.log(event.target)
  console.log('clicked')
})