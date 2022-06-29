const xhr = new XMLHttpRequest()

xhr.open('get', './data.json', true)

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText)
    }
  }
}

const params = {
  id: 1
}

xhr.send(JSON.stringify(params)) // post的时候需要JSON.stringify