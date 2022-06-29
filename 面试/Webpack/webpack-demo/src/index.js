import BigImg from './assets/bigimg.jpg'
import SmallImg from './assets/smallimg.jpg'
import './style/index.scss'
import { add } from './js/common'
import moment from  'moment'
import 'moment/locale/zh-cn'


function createImage() {
  const root = document.getElementById('root')
  const bigImg = document.createElement('img')
  bigImg.src = BigImg
  bigImg.classList.add('big-img')
  const smallImg = document.createElement('img')
  smallImg.src = SmallImg
  smallImg.classList.add('small-img')

  root.append(bigImg, smallImg)
}

createImage()
add(1, 2)

Promise.resolve(200).then(r => {})
console.log(412200)
if (module.hot) {
  module.hot.accept(['./js/sub'], () => {
    work()
  })
}
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
