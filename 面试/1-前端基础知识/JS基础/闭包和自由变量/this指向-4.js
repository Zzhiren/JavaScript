// this在class中的指向

class People {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  work() {
    console.log('class中的this: ', this)
  }
}

const p = new People('zzhiren', 18)
console.log('this.指向-4: ================')
p.work()
console.log('this.指向-4: ================')