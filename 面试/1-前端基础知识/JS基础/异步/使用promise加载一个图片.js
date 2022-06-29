const url = 'https://portrait.gitee.com/uploads/avatars/user/502/1506271_Zzhiren_1644564222.png!avatar200'
const errUrl = 'https://portrait.gitee.com/uploads/avatars/user/502/1506271_Zzhiren_sf1644564222.png!avatar200'
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      reject(new Error(`图片加载失败: ${src}`))
    }
    img.src = src
  })
}


// 1. async/await 方法
(async function() {
  const img = await loadImage(url)
  document.body.append(img)
  console.log(img)
})()

// 2. then/catch 方法
loadImage(url).then(img => {
  console.log(img)
}).catch(err => {
  console.log(err)
})
