const snabbdom = window.snabbdom

// 定义patch
const patch = snabbdom.init([
  snabbdom_class,
  snabbdom_props,
  snabbdom_style,
  snabbdom_eventlisteners
])

// 定义 h
const h = snabbdom.h

const container = document.getElementById('container')

const vnode = h('ul#list', {}, [
  h('li.item', {}, 'item 1'),
  h('li.item', {}, 'item 2'),
])

patch(container, vnode)

document.getElementById('btn-change').addEventListener('click', function() {
  // 生成new vnode
  const newVnode = h('ul#list', {}, [
    h('li.item', {}, 'item 1'),
    h('li.item', {}, 'item 2'),
    h('li.item', {}, 'item 3'),
    h('li.item', {}, 'item 4'),
  ])

  patch(vnode, newVnode)
})