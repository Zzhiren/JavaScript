(function () {
  console.warn('原型链继承=======================================')
  function Super(name) {
    this.name = name
    this.superProp = '父类属性'
  }

  Super.prototype.getSuperProp = function () {
    return this.superProp
  }

  function Sub() {
    this.subName = 'sub'
  }

  Sub.prototype = new Super()

  const subIns = new Sub()

  console.log(subIns.getSuperProp())
  console.log('sub构造函数', subIns.constructor)
  console.log('subName', subIns.subName)
})()