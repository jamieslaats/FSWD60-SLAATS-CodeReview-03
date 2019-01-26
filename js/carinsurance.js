	/*var currentDate = new Date();
	var day = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	var activeDate = ("Todays Date: "+ day + "." + month + "." + year);
	document.getElementById('todaysdate').innerHTML = activeDate;*/
  	
	

/*var calculateInsurance = function(event) {
	event.preventDefault();
	var countryName = document.getElementByID("country").value;
	console.log(countryName);
	var ageInput = document.getElementByID("age").value
	var bhpInput = document.getElementByID("bhp").value
	document.getElementByID('resultoutput').value = (bhpInput*100/ageInput+50);
} 
var form = document.getElementById('insuranceform');
form.addEventListener('submit', calculateInsurance, false);*/



function calculateInsurancePerCountry(horse_power,age,countryInput) {
 	var austria = Math.round(horse_power*100/age+50);
 	var hungary = Math.round(horse_power*120/age+100);
 	var greece = Math.round(horse_power*150/(age+3)+50);
 	var countryInput = [austria, hungary, greece];
 	return countryInput

 } 
 	
 	var insurance = calculateInsurancePerCountry(130,30)
	console.log(insurance);

