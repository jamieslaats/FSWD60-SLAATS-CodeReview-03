	/*-- Chose Note to Put this On the Front Page
	var currentDate = new Date();
	var day = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	var activeDate = ("Todays Date: "+ day + "." + month + "." + year);
	document.getElementById('todaysdate').innerHTML = activeDate;*/
  	
function processFormData() {
	
	var formFirstLastName = document.getElementById("firstlastname");
	var name = formFirstLastName.value;
	var formAge = document.getElementById("age");
	var age = formAge.value;
	var formBhp = document.getElementById("bhp");
	var horsePower = formBhp.value;
	
	var selected_index = myForm.elements["country"].selectedIndex;

	console.log(selected_index);
	
	if(selected_index = [1]) {
			var insurance = Math.round(Number(horsePower)*100/Number(age)+50);

	}
	else if (selected_index = [2]) {
			var insurance = Math.round(Number(horsePower)*120/Number(age)+100);
	}
	else if (selected_index = [3]) {
			var insurance = Math.round(Number(horsePower)*150/(Number(age)+3)+50);
	}
	
	document.getElementById("resultoutput").innerHTML = "<h2> Hi " + name + " your auto insurance per year is €" + insurance + ".</h2>";
	console.log("Hi " + name + "your auto insurance is per year €" + insurance + "!");
}

/*function calculateInsurancePerCountry(horse_power,age,country) {
 	var austria = Math.round(horse_power*100/age+50);
 	var hungary = Math.round(horse_power*120/age+100);
 	var greece = Math.round(horse_power*150/(age+3)+50);
 	var country = [austria, hungary, greece];
 	return country

 	var insurance = calculateInsurancePerCountry(horsePower,age);
	console.log(insurance);
 } */
	


	/*var allFormData = processFormData();
	console.log(allFormData);
	
 
 	var m = document.getElementById("calcBtn");
	m.addEventListener('submit',processFormData(), false);

 	document.getElementById("resultoutput").innerHTML = "Congratulations your insurance will be: <br> €" + insurance[0] + " per year!";
*/



