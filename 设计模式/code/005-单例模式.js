// 4.1 实现单例模式
const Singleton = function (name) {
  this.name = name;
  this.instance = null;
}

Singleton.prototype.getName = function () {
  console.log(this.name);
}

Singleton.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }

  return this.instance;
}

const instance1 = Singleton.getInstance('Tom');
const instance2 = Singleton.getInstance('Jerry');
instance1.getName()
instance2.getName()

console.log(instance1 === instance2)


// 4.2 透明的单例模式
const CreateDiv = (function () {
  let instance = null;
  const CreateDiv = function (html) {
    if (instance) {
      return instance;
    }
    this.html = html;
    this.init()

    return instance = this;
  }

  CreateDiv.prototype.init = function () {
    const div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div)
  }

  return CreateDiv;
})

const a = new CreateDiv()('sven1')
const b = new CreateDiv()('sven2')
console.log(a === b) // true


// 4.3 用代理实现单例模式
