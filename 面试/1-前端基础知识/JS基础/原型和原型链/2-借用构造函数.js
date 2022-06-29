(function () {
  console.log('')
  console.log('')
  console.warn('借用构造函数=======================================')
  function Super(name) {
    this.name = name
    this.superProp = '父类实例属性'
  }

  Super.prototype.getSuperProp = function () {
    return this.superProp
  }

  Super.prototype.SuperPorptotypeProp = '父类原型属性'

  function Sub() {
    Super.call(this, 'sub')
  }

  const subIns = new Sub()

  console.log('父类属性', subIns.superProp)
  console.log('父类原型属性', subIns.SuperPorptotypeProp)
})()