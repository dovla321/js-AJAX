document.querySelector('#fetchBtn').addEventListener('click', e => {
	e.preventDefault();

	let id = document.querySelector("#userID").value;

	console.log(id);

	//  request

		let r = fetch('https://62a88cb0943591102ba4e94b.mockapi.io/Projekt1/' + id)
		.then(response => response.json()).then(data => {
			console.log(data);

			let podaci = document.querySelector('#podaci');

			podaci.innerHTML = `<p><b>${data['email']}</b></p>
			                     <p>${data['username']}</p> 
			                     <p><i>${data['password']}</i></p>`;

		}).catch(error => {
			alert(error);
		});
});





