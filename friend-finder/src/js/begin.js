//Do NOT change any of this code, just add code where you see a TODO:

function Begin(){

let button = document.querySelector('#button');
let content = document.querySelector('#content');

/************************ ALL FRIENDS ***************************/

button.addEventListener('click', (evt) => {
	getItems()
	.then((data) => {
		console.log('resolved', data);
		renderItems(data);
	})
	.catch((err) => console.log('rejected', err));
});

const getItems = async () => {
	const res = await fetch(`./data/friends.json`);
	const data = await res.json(); 
	return data;
}

function renderItems(items) {
	let output = 
	`
	<div class="card">
    <div class="card-body">
			<ul>
	`;
	items.forEach((item) => {
		output += 
		`
		<li class="mb-3">
			<button type="button" class="btn btn-dark btn-block w-25" data-id="${item.id}">
				${item.firstName} ${item.lastName}
			</button>
		</li>
		`;
	  });
		output += 
		`
				</ul>
			</div>
		</div>
		`;  
	content.innerHTML = output;
}

/************************ CHOSEN FRIEND FILE *****************************/

content.addEventListener('click', (evt) => {
		const id = evt.target.dataset.id;
		console.log(`chosen id = ${id}`);
		//TODO: complete this function.
		//HINT: use the chosen friends "id" as a 
		//parameter to the "getItem" function.

		getItem(id)
		.then((data) => {
			console.log('resolved', data);
			renderItem(data);
		})
		.catch((err) => console.log('rejected', err));



});

const getItem = async (id) => {
	const res = await fetch(`./data/${id}.json`);
	//TODO: complete this function.
	const data1 = await res.json(); 
	return data1;
	
}

function renderItem(item) {
	//TODO: complete this function.
	//HINT: present all of the chosen friends info
	//in the "content" div, including the avatar. 
	//Make it look similar to the screen shot in the specs.
	//Use Bootstrap or Custom CSS to achieve this.

	let output2 = 
	`
	<div class="wide-container">
    <div class="flex-container">
			<img src="${item.avatar}" alt="Friend picture">
			<ul data-id="${item.id}">
	`;
		output2 += 
		`
				<li>${item.firstName} ${item.lastName}</li>
				<li><span>email: </span>${ item.email}</li>
				<li><span>hometown: </span>${ item.hometown}</li>
				
		`;

		output2 += 
		`
				</ul>
				
			</div>
			<p>${item.bio}</p>
		</div>
		`;  
	content.innerHTML = output2;
	
}

}

export default Begin;