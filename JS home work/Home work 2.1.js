//1)Функція, що приймає масив та виводить останній елемент в консоль
function printLastElement (list){
	console.log(list[list.length-1]);

}

//2)
var style =["Джаз", "Блюз"];
style.push("Рок-н-Ролл");
style [style.length-2] = "Класика";
console.log(style.shift());
style.unshift("Реп", "Регги");

//3)
function find(arr, value){
	var rezult=-1;
	for (var i = arr.length-1; i >= 0; i--) {
		if (arr[i]==value) {
			rezult = i;
			return rezult;
		}
		
		
	}
}
//4)
var arrNum = [5,10,12,-1,-4,-15,0,12,13,5,-4,18,11,3,2,3,4,-5,-3,-1];

arrNum.sort(function(a,b){ 
  return a - b;
})

arrNum.sort(function(a,b){ 
  return b - a;
})

function onlyPN (arr){
	var numObject = {
	pozitiv :[],
	negativ : []
	}
	arr.sort(function(a,b){ 
  		return b - a;
	})
	for (var i = arr.length - 1; i >= 0; i--) {
		if (arr[i]>=0) {
			numObject.pozitiv.push(arr[i]);
		} else {
			numObject.negativ.push(arr[i]);
			   }	
	}
	return numObject;
}

