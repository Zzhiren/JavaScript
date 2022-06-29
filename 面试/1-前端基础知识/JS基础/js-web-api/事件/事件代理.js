function bindEvent(elem, type, fn) {
	elem.addEventListener && elem.addEventListener(type, fn)
}

const div1 = document.getElementById('div1')
bindEvent(div1, 'click', event => {
	console.log(event.target.nodeName)
	if (event.target.nodeName === 'P') {
		alert(event.target.innerHTML)
	}
})