function reactive(target) {
  const proxyConfig = {
    get(target, key, receiver) {
      // 只处理本身非原型的属性
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        // 监听
        console.log('get:', key)
      }
      const result = Reflect.get(target, key, receiver)

      return reactive(result)
    },

    set(target, key, val, receiver) {
      // 重复的数据，不处理
      if (val === target[key]) {
        return true
      }

      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        // 监听
        console.log('set 已有的key', key)
      } else {
        console.log('set 新增的key', key)
      }

      return Reflect.set(target, key, val, receiver)
    },

    deleteProperty(target, key) {
      return Reflect.deleteProperty(target, key)
    }
  }

  return new Proxy(data, proxyConfig)
}

const data = {
  name: 'Tom',
  age: 30
}

const proxyData = reactive(data)
