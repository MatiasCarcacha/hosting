const aplicacion = document.querySelector('#grupomiembros');

const url = 'https://hub.dummyapis.com/employee';

fetch(url)
.then(res => res.json())
.then(data => 

{

	data.forEach(usuario => {
		console.log(usuario.firstName);
		const p = document.createElement('tr');
		p.innerHTML = `
		<td>${usuario.firstName + " " + usuario.lastName}</td>
		<td>${usuario.age}</td>
		<td>${usuario.email}</td>
		`
		aplicacion.appendChild(p);	
	});
})

.catch(err => console.log(err));
