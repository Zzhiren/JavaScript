function print1 () {
  const a = 100
  return function () {
    console.log('print1:a', a)
  }
}

function print2 (fn) {
  const a = 200
  fn()
}

const a = 100
function fn () {
  console.log('print2:a', a)
}

const p1 = print1()
p1()
print2(fn)

// 闭包: 自由变量的查找是在函数定义的作用域开始查找，不是在函数的执行作用域开始查找