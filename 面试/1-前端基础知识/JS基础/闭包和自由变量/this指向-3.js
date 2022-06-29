// this在对象中的指向
const people = {
  name: 'zzhiren',
  work() {
    // this => 对象 people
    console.info('work: ', this)
  },
  sleep() {
    setTimeout(function () {
      // this => window
      console.log('this.指向-3 setTimeout: ================')
      console.info('sleep: ',this)
      console.log('this.指向-3 setTimeout: ================')
    })
  },
  wakeUp() {
    setTimeout(() => {
      // this => 对象 people
      // 箭头函数 this 指向定义位置的上级作用域
      console.log('this.指向-3 setTimeout 箭头函数: ================')
      console.info('wakeUp: ', this)
      console.log('this.指向-3 setTimeout 箭头函数: ================')
    }, 0)
  }
}

people.work()
people.sleep()
people.wakeUp()
