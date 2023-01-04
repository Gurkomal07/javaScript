function Begin(){

const form = document.querySelector("#form")


form.addEventListener("submit", e => {
	//TODO: Add code here to make use of the
	//given functions to create a working app
	//as per the specs.

	e.preventDefault();
	
	let {text, gif} = getUserValues(e);

	let {message, isNotValid} = validateUserValues(text.trim(), gif);
		if(isNotValid){
			showAlert(message, 'error');
		} else {
			AddItemToList(text, gif);
			showAlert('Item Added to List!', 'success');
			clearUserValues(e);
		}
});

function getUserValues(e){
	let text = e.target.elements["text"].value;
	let gif = e.target.elements["gif"].value;
	return {text, gif}
}

function validateUserValues(text, gif){
	let message = '';
	let isNotValid = true;
	//TODO: Put code here to validate both
	//the text and gif as per the specs.

	if(text === '')
	{
		message += `| Text |`;
	}
	
	if(text.length > 50)
	{
		message += `| Text > 50 |`;
	}
	

	if(gif === '')
	{
		message += '| Gif |';
	}
	
	
	if(message != '')
		message = `Missing Data: ` + message;
	else isNotValid = false;
	return {message, isNotValid};
}

function showAlert(message, className) {
	const parentDiv = document.querySelector('#alert');
	//TODO: Add code here to display an alert.

	const alertHtml = 
		`
		<div class='${className} form-control'>
			${message}
		</div>
		`
		parentDiv.innerHTML = alertHtml;
	
}

function AddItemToList(text, gif) {
	let list = document.querySelector("#list");
	//TODO: Add code here to add an item to
	//the list.

	let newItem = 
	`
	<div class="d-flex mb-3">
		<img class="rounded-start mx-3" src="./img/${gif}" alt="${gif}">
		<h5 class='mx-3'>${text}</h5>
	</div>
	`


	list.innerHTML =  newItem + list.innerHTML;
	
}

function clearUserValues(e) {
	e.target.elements["text"].value = '';
	e.target.elements["gif"].value = '';
}

}

export default Begin;