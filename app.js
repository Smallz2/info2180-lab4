"use strict"

window.onload = function () {
	let form = document.querySelector('#form');

	main();	
}

function main() {
	// Handle form search
	form.addEventListener('submit', fetch_characters);
}

function fetch_characters(event) {
	event.preventDefault();
	var form_target = event.currentTarget;
	var query_text = document.querySelector('.query_text').value;

	try {
		// Set url params
		var params = { query: `${query_text}` }
		var urlParams = new URLSearchParams(Object.entries(params));
		fetch("./superheroes.php?" + urlParams)
			.then(
				function(response) {
					if (response.status !== 200) {
						console.log('Something went wrong. Status Code: ' + response.status);
						return;
					}

					// Get the data from response 
					response.text().then(function(promise) {
						updateUI(promise)
					});
				}
			)
			.catch(function(error) {
				console.log("Fetching error: " + error);
			});
	} catch (error) {
		console.log(error);
	}
}

function updateUI(promise) {
	document.querySelector('.result').innerHTML = promise;
}
 