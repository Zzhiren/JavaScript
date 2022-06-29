import Icon from "./图片.png";
import './index.scss'
export const createIcon = () => {
  const img = document.createElement('img')
  img.src = Icon
  img.classList.add('icon')
  document.getElementById('root').append(img)
}
createIcon()