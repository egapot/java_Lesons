//4)
function filterRange(array, a, b) {
	var newArray = [];
	for (var i = array.length - 1; i >= 0; i--) {
		if ( array[i]>=a && array[i]<=b) {
			newArray.unshift(array[i]);
			console.log(array[i]);
		} 
	}
	return newArray;
}
var a = [1,2,3,4,5,6,7,8,9];
console.log(filterRange(a, 5, 7));

//5)
function camelize (str){
	var rezult = str.replace(/[-]/g, '');
	return rezult;
}
var b = "my-short-string";
console.log(camelize(b));
//6)
var Student = [10];
	Student[0]={
		yearOfStuding: 10,
		facultyName: "A"
	}
	Student[1]={
	yearOfStuding: 11,
	facultyName: "B"
	}
	Student[2]={
	yearOfStuding: 9,
	facultyName: "C"
	}
function summYear (array){
	var a = 0;
	for (var i = array.length - 1; i >= 0; i--) {
		a += array[i].yearOfStuding;
	}
	return a;
}
var NameStudent = Object.assign({}, Student);


console.log(NameStudent);
