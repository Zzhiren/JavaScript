(function () {
  console.log('')
  console.log('')
  console.warn('寄生组合继承=======================================')
  function object(_prototype) {
    function F () {}
    F.prototype = _prototype
    return new F()
  }

  function extendsSuper(Sub, Super) {
    const prototype = object(Super.prototype)
    prototype.constructor = Sub
    Sub.prototype = prototype
    return Sub
  }

  function Super(name) {
    this.name = name
    this.superName = 'superName'
  }

  Super.prototype.Say = function () {
    console.log('Say')
  }

  function Sub(name, age) {
    Super.call(this, name)
    this.subName = 'subName'
    this.age = age
  }

  const subIns = new (extendsSuper(Sub, Super))('sub', 22)

  subIns.Say()
  console.log(subIns.name)
  console.log(subIns.age)
  console.log(subIns.subName)
  console.log(subIns.superName)

})()