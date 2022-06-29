function updateView() {
  console.log('视图更新')
}

const arrProperty = Array.prototype
const reactiveArr = Object.create(arrProperty)
const arrFun = ['push', 'pop', 'shift', 'unshift', 'splice']
arrFun.forEach(methodName => {
  reactiveArr[methodName] = function () {
    updateView()
    Array.prototype[methodName].call(this, ...arguments)
  }
})

function defineReactive(target, key, value) {
  observer(value)
  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newValue) {
      if (newValue !== value) {
        observer(newValue)
        value = newValue
        updateView()
      }
    }
  })
}

function observer(target) {
  if (typeof target !== 'object' || target === null) {
    return target
  }

  if(Array.isArray(target)) {
    target.__proto__ = reactiveArr
  }

  for(let key in target) {
    defineReactive(target, key, target[key])
  }
}

const data = {
  name: 'Tom',
  age: 20,
  info: {
    country: '中国'
  },
  nums: []
}

observer(data)

// data.age = 18
// data.info.country = '中国大陆'
data.nums.push(1)