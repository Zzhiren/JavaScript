/**
 * 依赖收集
 */
export default class Dep {
  constructor() {
    this.subs = []
  }

  addSub(sub) {
    if (sub && (this.subs.indexOf(sub) === -1)) {
      this.subs.push(sub)
    }
  }

  notify() {
    this.subs.length > 0 && this.subs.forEach(sub => {
      sub.update()
    })
  }
}