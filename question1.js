
function simpleInterest(){
	
	let amount = prompt('Enter Amount');
	let rate = prompt('Enter rate of interest');
	let time = prompt('Enter Time');
	let interest = (amount*rate*time)/100;
window.alert("Simple Interest of Amount : "+amount+" @ Rate : "+rate+"  for Time : "+time +" is : "+interest);
}

function isPalindrome(){
	
	let str = prompt('Enter String');
	
	let rev=str.split('').reverse().join('');
	
	
	if(str == rev){
		window.alert("Yes  "+str+" is Palindrome");
	}else{
		window.alert("No  "+str+" is not a Palindrome");
	}
}

function areaOfCircle(){
	
	let r = prompt('Enter radius of circle');
	window.alert("Area of circle having radius "+r+" is "+(3.14*r*r));
}


function copyobject(obj){
	
	let  copy={};
	
	for(let key in obj){
		copy[key]=obj[key];
	}
	
	console.log(copy);
	
}


var list =[

{
	Name:"Mayank", age:20, salary:5100 ,DOB:"24/07/1999"
},

{
	Name:"Sunny", age:20, salary:5900,DOB:"24/07/1999"
},


{
	Name:"Mansi", age:21, salary:4100 ,DOB:"17/12/1999"
},


{
	Name:"Naina", age:23, salary:500 ,DOB:"22/03/1999"
}


];

function filterBySalary(sal){
	
	const a = list.filter((e)=>e.salary>sal).map((e)=>e.Name);
	
	
	window.alert("Employee having salary: "+a);
}

function groupEmpByAge(){

	const grp = list.reduce((acc,e)=>{
		
		if(acc.hasOwnProperty(e.age)){
			acc[e.age].push(e)
		}else{
			acc[e.age]=[e];
		}
		
		return acc;
		
	},{});
	
	for(var key in grp){
		var g="";
		for(var x in grp[key]){
			
			g += grp[key][x].Name +" , ";
		}
		console.log("Group Age : "+key+" = {"+g+"}");
	}
}

function incrementSalary(){
	
	var temp = list.filter((e) => (e.age>20 && e.salary<1000)?true:false);
	
	var temp2 = temp.map((e)=> {
		e.salary *= 5;
		return e;
		});
	temp2.forEach((e)=> console.log(e));
}
