function throttle (fn, time = 1000, ) {
  let timer
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, time)
    }
  }
}