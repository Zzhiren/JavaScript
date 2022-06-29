Function.prototype.myBind = function () {
  const _this = this
  const args = Array.prototype.slice.call(arguments)
  const context = args.shift()
  return function () {
    _this.apply(context, args)
  }
}

function fn1(a, b, c) {
  console.log(this)
  console.log(a)
  console.log(b)
  console.log(c)
}

const fn2 = fn1.bind({ name:'zzhiren' })

const fn3 = fn1.myBind({ name: 'xiaoyu' }, 1, 2, 3)

// fn2()
fn3()


