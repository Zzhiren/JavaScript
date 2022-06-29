function ajax(method, url, data = null) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.open(method, url)
		xhr.onreadystatechange = function(data) {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					resolve(xhr.responseText)
				} else if (xhr.status === 404) {
					reject(new Error('404 Not Found!'))
				} else {
					reject(new Error(xhr.responseText))
				}
			}
		}

		if (data) {
			xhr.send(JSON.stringify(data))
		} else {
			xhr.send()
		}
	})
}

ajax('GET', './data.json').then(res => {
	console.log(res)
})

ajax('POST', './data.json', { id: 1 }).then(res => {
	console.log(res)
})