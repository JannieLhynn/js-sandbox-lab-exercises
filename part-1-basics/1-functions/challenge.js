// Create a function that will calculate the age of the user
// Create a function that will calculate the retirement age of the user
// Create a function that will calculate the year of retirement of the user
// Create a function that will calculate the year remaining for the user to retire

const userName = 'Jane';
function calcUserAge(userBirthYear) { // Calculate User Age
	const yearNow = new Date().getFullYear();
	const userAge = yearNow - userBirthYear;
	const retirementYear = yearNow + (50 - userAge);
	const retiredYear = retirementYear - yearNow; // Calculate Retirement Age
	if (userAge > 50) {
		console.log(`${userName} is ready for retirement`);
	} else {
		console.log(`${userName} is ${userAge} years old and can retire at the year ${retirementYear} with ${retiredYear} years remaining at work`)
	}
}

calcUserAge(2000);




