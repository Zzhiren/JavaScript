(function() {
  const p1 = new Promise((resolve, reject) => {})

  console.log('promise讲解-1, p1', p1)

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    })
  })

  console.log('promise讲解-1, p2', p2)

  setTimeout(() => {
    console.log('promise讲解-1, p2 setTimeout', p2)
  })

  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('err')
    })
  })

  console.log('promise讲解-1, p3', p3)

  setTimeout(() => {
    console.log('promise讲解-1, p3 setTimeout', p3)
  })
})()