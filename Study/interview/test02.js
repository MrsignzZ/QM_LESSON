function ajax(options) {
	let xhr = new XMLHttpRequest()

	if (options.type === 'GET') {
		xhr.open('GET', options.url + '?' + options.data, true)
		xhr.send()
	} else if (options.type === 'POST') {
		xhr.open('POST', options.url, true)
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'); 著作权归作者所有。
		xhr.send(options.data)
	}

	xhr.onreadystatechange = function () {
		if(xhr.readyState == 4){
			const status = xhr.status
			if (status === 200 || xhr.status === 304 || xhr.status === 206) {
				options.success(xhr.responseText, xhr.responseXML)
			} else {
				options.fail(status)
			}
		}
	}
}
