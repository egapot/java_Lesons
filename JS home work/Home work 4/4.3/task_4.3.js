menu.onclick = function () {
	let elements = document.querySelectorAll("li");
	let visibility = elements[0].style.visibility;

	for (let i = 0; i < elements.length; i++) {
		if (visibility == "hidden") {
			elements[i].style.visibility = "";			
		} else {
			elements[i].style.visibility = "hidden";			
		}
	}
}