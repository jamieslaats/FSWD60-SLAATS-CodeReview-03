	/*-- Chose Note to Put this On the Front Page
	var currentDate = new Date();
	var day = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	var activeDate = ("Todays Date: "+ day + "." + month + "." + year);
	document.getElementById('todaysdate').innerHTML = activeDate;*/
  	
	
function calculateInsurancePerCountry(horse_power,age,country) {
 	var austria = Math.round(horse_power*100/age+50);
 	var hungary = Math.round(horse_power*120/age+100);
 	var greece = Math.round(horse_power*150/(age+3)+50);
 	var country = [austria, hungary, greece];
 	return country
 } 

	var insurance = calculateInsurancePerCountry(150,41);
	console.log(insurance);


function getForm() {
	var formFirstLastName = document.getElementById("firstlastname").value;
	var formAge = document.getElementById("age").value;
	var formCountry = document.getElementById("country").value;
	var formBhp = document.getElementById("bhp").value;
	var formData = [formFirstLastName, formAge, formCountry, formBhp]
	return formData
}	

	var allFormData = getForm();
	console.log(allFormData);
	
 
 	var m = document.getElementById("calcBtn");
	m.addEventListener('submit',getForm(), false);

 	document.getElementById("resultoutput").innerHTML = "Congratulations your insurance will be: <br> €" + insurance[0] + " per year!";




