function bindEvent(elem, type, fn) {
  elem.addEventListener && elem.addEventListener(type, fn)
}

const a1 = document.getElementById('a1')
const a2 = document.getElementById('a2')

bindEvent(a1, 'click', event => {
  event.preventDefault()
  console.log(event.target)
  console.log('阻止默认行为')
})

bindEvent(a2, 'click', event => {
  console.log(event.target)
  console.log('有默认行为')
})
