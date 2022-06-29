
function debounce(fn, time = 1000, immediate = false) {
  let timer = null
  return function () {
    const context = this
    if (timer) {
      clearTimeout(timer)
    }

    if (immediate && !timer) {
      timer = setTimeout(() => {
        clearTimeout(timer)
        timer = null
      }, time)
      fn.apply(context, arguments)
    } else {
      timer = setTimeout(() => {
        fn.apply(context, arguments)
      }, time)
      function debounce(fn, time = 1000, immediate = false) {
        let timer = null
        return function () {
          const context = this
          if (timer) {
            clearTimeout(timer)
          }

          if (immediate && !timer) {
            timer = setTimeout(() => {
              timer = null
            }, time)
            fn.apply(context, arguments)
          } else {
            timer = setTimeout(() => {
              fn.apply(context, arguments)
            }, time)
          }
        }
      }
    }
  }
}
const el = document.getElementById('input1')
el.addEventListener('keyup', debounce(onChange, 1000, true))

function onChange() {
  console.warn(arguments)
  console.log(el.value)
}
