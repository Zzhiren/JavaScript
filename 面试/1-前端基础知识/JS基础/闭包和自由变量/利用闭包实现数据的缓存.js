function createCache() {
  const data = {}
  return {
    set: function (key, val) {
      data[key] = val
    },
    get: function (key) {
      return data[key]
    }
  }
}

const cache = createCache()
cache.set('name', 'zzhiren')
const res = cache.get('name')
console.log(res)