"use strict"

window.onload = function () {
	main();
}

function main() {
	// Handle Button Click
	var button = document.querySelector(".search-button");
	button.addEventListener('click', fetch_characters);
}

function fetch_characters() {
	fetch('http://localhost/info2180-lab4/superheroes.php')
		.then(
			function(response) {
				if (response.status !== 200) {
					console.log('Something went wrong. Status Code: ' + response.status);
					return;
				}

				// Get the data from response 
				response.text().then(function(promise) {
					alert(promise);
				});
			}
		)
		.catch(function(error) {
			console.log("Fetching error: " + error);
		});
}