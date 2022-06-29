(function () {

  const p1 = Promise.resolve(100)

  console.log('promise讲解-2，p1', p1)

  p1.then(data => {
    console.log('promise讲解-2，p1.then, data', data)
  })

  const p2 = Promise.reject({ err: '错误' })

  console.log('promise讲解-2，p2', p2)

  p2.catch(err => {
    console.log('promise讲解-2，p2.catch, err', err)
  })

})()