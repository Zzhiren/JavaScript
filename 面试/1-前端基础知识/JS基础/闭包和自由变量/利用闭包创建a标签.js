function createATag() {
  let i
  for(i = 0; i < 10; i++) {
    (function (idx) {
      const a = document.createElement('a')
      a.innerHTML = idx + '<br/>'
      a.addEventListener('click', function (e) {
        e.preventDefault()
        alert(idx)
      })
      document.body.append(a)
    })(i)
  }
}

createATag()

function createATag2() {
  for(let i = 0; i < 10; i++) {
    const a = document.createElement('a')
    a.innerHTML = i + '<br/>'
    a.addEventListener('click', function (e) {
      e.preventDefault()
      alert(i)
    })
    document.body.append(a)
  }
}

createATag2()