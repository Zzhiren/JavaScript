// 改变this指向

function fn1 () {
  console.log('this指向-2: ', this) // 浏览器中是window, nodejs中是全局对象global
}

fn1.call({ name: 'zzhiren', age: '18' })

// this => { name: 'zzhiren', age: '18' }
const fn2 = fn1.bind({ name: 'zzhiren', age: '18' })
console.log('this.指向-2: ================')
// this => { name: 'zzhiren', age: '18' }
fn2()
console.log('this.指向-2: ================')