(function () {
  console.log('')
  console.log('')
  console.warn('组合继承=======================================')
  function Super(name) {
    this.name = name
    this.superProp = '父类实例属性'
  }

  Super.prototype.getSuperProp = function () {
    return 'Super.prototype.getSuperProp'
  }

  Super.prototype.SuperPorptotypeProp = '父类原型属性'

  function Sub() {
    Super.call(this, 'sub')
  }

  Sub.prototype = new Super()
  Sub.prototype.constructor = Sub

  const subIns = new Sub()

  console.log('subIns.name', subIns.name)
  console.log('实例构造函数', subIns.constructor)
  console.log('父类属性', subIns.superProp)
  console.log('父类原型属性', subIns.SuperPorptotypeProp)
  console.log('调用父类原型方法', subIns.getSuperProp())
})()