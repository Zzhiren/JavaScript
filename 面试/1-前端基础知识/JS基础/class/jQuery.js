class jQuery {
  constructor(selector) {
    this.selector = selector
    const result = document.querySelectorAll(selector)
    this.length = result.length
    for(let i = 0; i < result.length; i++) {
      this[i] = result[i]
    }
  }

  get(index) {
    return this[index]
  }
}

jQuery.prototype.find = (elem) => {
  console.log(elem)
}