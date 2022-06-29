import Icon from './图片.png'
import _ from 'lodash'
import './index.scss'

const img1 = document.createElement('img')
img1.src = Icon
img1.classList.add('icon')
document.getElementById('root').append(img1)
console.log('222')

const btn = document.createElement('button')
btn.innerHTML = '新增'
document.body.appendChild(btn)
btn.onclick = () => {
  const item = document.createElement('div')
  item.innerHTML = 'item'
  document.body.appendChild(item)
}

console.log(_.join(['a', 'b', 'c'], '**'))