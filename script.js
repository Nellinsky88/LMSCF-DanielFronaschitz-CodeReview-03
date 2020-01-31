function calculateInsurance(){
	var name = document.getElementById("name");
	var age = document.getElementById("age");
	var hp = document.getElementById("hp");
	var country = document.getElementById("country");
	
	var insurance = 0;

	if (country.value == "at"){
		insurance = hp.value * 100 / age.value + 50;	
	}
	else if (country.value == "hu"){
		insurance = hp.value * 120 / age.value + 100;	
	}
	else if (country.value == "gr"){
		insurance = hp.value * 150 / (age.value + 3) + 50;	
	}
	insurance = insurance * 100;
	insurance = Math.round(insurance);
	insurance = insurance / 100;

	var result = name.value + ",your insurance costs " + insurance + "€";

	var output = document.getElementById("result");
	output.innerHTML = result;
}


var button = document.getElementById("button");

button.addEventListener("click", calculateInsurance);