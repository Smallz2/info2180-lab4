"use strict"

window.onload = function () {
	main()
}

function main() {
	// Handle Button Click
	var button = document.querySelector(".search-button")
	button.addEventListener('click', get_characters)
}

function get_characters() {
	fetch('http://localhost/superheroes.php')
	  .then(response => response.json())
	  .then(data => console.log(data));
}