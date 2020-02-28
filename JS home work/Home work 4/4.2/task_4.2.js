hideText.onclick = function () {
	let visibility = text.style.visibility;
	
	if (visibility == "hidden") {
		text.style.visibility = "";
		this.textContent = "Скрыть текст";
	} else {
		text.style.visibility = "hidden"
		this.textContent = "Отобразить текст";
	}
}

hideButton.onclick = function () {
	this.style.display = "none";	
}