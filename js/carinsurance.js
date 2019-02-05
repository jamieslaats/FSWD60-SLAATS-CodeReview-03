	/*-- Chose Note to Put this On the Front Page
	var currentDate = new Date();
	var day = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	var activeDate = ("Todays Date: "+ day + "." + month + "." + year);
	document.getElementById('todaysdate').innerHTML = activeDate;*/
 
function calculateMyInsurance(formFirstLastName,formAge,formBhp,formCountry) {

	var formFirstLastName = document.getElementById("firstlastname").value;
	console.log(formFirstLastName);
	var formAge = Number(document.getElementById("age").value);
	console.log(formAge);
	var formBhp = Number(document.getElementById("bhp").value);
	console.log(formBhp);
	var formCountry = document.getElementById("country").value;
	console.log(formCountry);

		if (formCountry == "Austria") {
			document.getElementById("resultoutput").innerHTML = formFirstLastName + " your yearly insurance will be €" + Math.floor(formBhp*100/formAge+50) + "!"
		
		} else if (formCountry == "Hungary") {
			document.getElementById("resultoutput").innerHTML = formFirstLastName + " your yearly insurance will be €" + Math.floor(formBhp*120/formAge+100) + "!"
		
		} else {
			document.getElementById("resultoutput").innerHTML = formFirstLastName + " your yearly insurance will be €" + Math.floor(formBhp*150/(formAge+3)+50) + "!"
		}
	}

	document.getElementById("calcBtn").addEventListener("click", calculateMyInsurance, false);




/* TRY OF CALCULATE INSURANCE BY COUNTRY AND WOULDN"T WORK with the BELOW??? */
/*	function calculateInsurancePerCountry(horse_power,age) {
 	
	var formFirstLastName = document.getElementById("firstlastname").value;
	console.log(formFirstLastName);
	var formAge = Number(document.getElementById("age").value);
	console.log(formAge);
	var formBhp = Number(document.getElementById("bhp").value);
	console.log(formBhp);
	var formCountry = document.getElementById("country").value;
	console.log(formCountry);


	var austria = Math.round(formBhp*100/formAge+50);
 	var hungary = Math.round(formBhp*120/formAge+100);
 	var greece = Math.round(formBhp*150/(formAge+3)+50);
 	var country = [austria, hungary, greece];
 	return country
 	console.log(country);

	var insurance = calculateInsurancePerCountry(formBhp,formAge);
	console.log(insurance);

 	if (formCountry == "Austria") {
		document.getElementById("resultoutput").innerHTML = "Dear " + formFirstLastName + " your yearly insurance will be € " + country[0] + " !"; 
	
	}else if (formCountry = "Hungary") {
		document.getElementById("resultoutput").innerHTML = "Dear " + formFirstLastName + " your yearly insurance will be € " + country[1] + " !"; 
	
	}else {
		document.getElementById("resultoutput").innerHTML = "Dear " + formFirstLastName + " your yearly insurance will be € " + country[2] + " !"; 
	}
}
		document.getElementById("calcBtn").addEventListener("click", calculateInsurancePerCountry, false);*/
	
