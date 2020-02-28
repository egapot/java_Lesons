function fillListItems() {
	var elements = document.querySelectorAll("li");

	for (var i = 0; i < elements.length; i++) {
		elements[i].innerHTML = "какой-то текст " + (i + 1);
	}

	var numberOfItems = elements.length;
	console.log("Было заполнено " + numberOfItems + " элементов списка!");
}