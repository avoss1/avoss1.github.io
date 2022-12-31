var form = document.getElementById("contactForm")

async function handleSubmit(event) {
	alert('you submitted')
	event.preventDefault();
	var data = new FormData(event.target);
	fetch(event.target.action, {
		method: form.method,
		body: data,
		headers: {
			'Accept': 'application/json'
		}
	}).then(response => {
		if (response.ok){
			alert("Contact form submitted");
			form.reset()
		} else {
			response.json().then(data => {
				if (Object.hasOwn(data, 'errors')) {
					alert(data["errors"].map(error => error["message"]).join(", "))
				} else {
					alert('An error occurred')
				}
			})
		}
	}).catch(error => {
		alert('There was an issue')
	});

}

form.addEventListener("submit", handleSubmit)