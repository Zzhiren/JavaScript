// 普通函数中this指向

function fn1 () {
  // 浏览器中是window, nodejs中是全局对象global
  console.log('this指向-1：', this)
}
console.log('this.指向-1: ================')
fn1()
console.log('this.指向-1: ================')