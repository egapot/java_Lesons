//1)
function makeBuffer (){
	var value="";
	return{
	add: function (a){
		value+=a;
	},
	print: function(){
		console.log (value);
	},	
	clear: function(){
		value="";
	}
	}
}
var buffer = makeBuffer();
buffer.add(1);
buffer.add(0);
buffer.add("Java ");
buffer.add("Script");
buffer.print();
buffer.clear();
buffer.print();




