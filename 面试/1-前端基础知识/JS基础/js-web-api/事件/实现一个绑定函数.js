function bindEvent(elem, type, selector, fn) {
  if (fn == null) {
    fn = selector
    selector = null
  }

  elem.addEventListener(type, event => {
    if (selector) {
      // 代理模式
      if (event.target.matches(selector)) {
        console.log('selector', event.target.matches(selector))
        fn.call(event.target, event)
      }
    } else {
      fn.call(event.target, event)
    }
  })
}

const div1 = document.getElementById('div1')
bindEvent(div1, 'click', 'p', event => {
  console.log(event.target.nodeName)
  if (event.target.nodeName === 'P') {
    alert(this.innerHTML)
  }
})