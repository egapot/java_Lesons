//1)
var admin;
var name;

name = "John";
admin = name;

console.log(admin);

//2)
 var login,password;
            login ='admin';
            if(login=='cancel'){
                console.log("Canceled");
            }else if(login=="Other"){
                console.log("I don't now you");
            }else if(login=="Admin"){
                password="TheMaster";
                if(password=='Cancel'){
                    console.log("Canceled");
                }else if(password=="Other"){
                    console.log("Wrong password");
                }else if(password=="TheMaster"){
                    console.log("Welcome");
                }
            }
//3)           
var user = {} ;
user.salary = 100;
user.name = "Pulup";
user.surname = "Shevchenko";
user.name = "Sergiy";
delete user.name;

//4)
function User(name, salary){
	this.name = name;
	this.salary = salary;
}
var petia = new User("Petia", 100);
var ivan = new User("Ivan", 150);
var yura = new User("Yura");
	
var empoyeeSalaries ={

	salaryMethod:function showSalary ( User){
		if (User.salary==undefined) {
			console.log(User.name+"'s salary is 0");
		} else {
			console.log(User.name+"'s salary is "+User.salary);}
		

	}
}
	
empoyeeSalaries.salaryMethod(ivan);

empoyeeSalaries.salaryMethod(yura);

//5)
function Act (a, b, act){
	this.a = a;
	this.b = b;
	this.act = act;
}
var one = new Act (1,2, "add");
var two = new Act (1,2, "subtract");
var three = new Act (1,0, "division"); 
var four = new Act (1,2, "multiplication"); 

function Calculator (Act){
	var result;
	switch(Act.act){
		case 'add': result = Act.a+Act.b;
		break;
		case 'subtract': result = Act.a-Act.b;
		break;
		case 'division': if (isFinite(1000/Act.b)) {
			result = Act.a/Act.b;
		} else {
			result = "NuN";
		}
			
		break;
		case 'multiplication': result = Act.a*Act.b;
		break;
	}

		return result;
}
console.log("result is " + Calculator(three));