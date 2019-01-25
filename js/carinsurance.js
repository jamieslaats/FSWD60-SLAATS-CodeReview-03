	var currentDate = new Date();
	var day = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	var activeDate = ("Todays Date: "+ day + "." + month + "." + year);
	document.getElementById('todaysdate').innerHTML = activeDate;
  	

 function calculateInsurancePerCountry(horse_power,age,country) {
 	var austria = Math.round(horse_power*100/age+50);
 	var hungary = Math.round(horse_power*120/age+100);
 	var greece = Math.round(horse_power*150/(age+3)+50);
 	var country = [austria, hungary, greece];
 	return country

 } 
 	var insurance = calculateInsurancePerCountry(240,41,"austria")
 	console.log(insurance[2])