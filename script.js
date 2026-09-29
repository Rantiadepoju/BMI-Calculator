// BMI CALCULATOR

//Create a simple JavaScript program that calculates an individual's Body Mass Index (BMI) and provides a basic assessment of their weight status.

const personName = "Matt Foreman";
const weightKg = 75;
const heightM = 1.75;

// Square of the height
const heightSquared = heightM * heightM;

// Calculate BMI
const bmi = weightKg / heightSquared ; 

// check whether the person isUnderweight = bmi < 18.5
bmi < 18.5;
const isUnderweight = bmi < 18.5; 

// check for isnormalweight BMI => 18.5 && < 25
const isNormalWeight = bmi >= 18.5 && bmi < 25;

// isOverweight
const isOverweight = bmi >= 25;

// High risk if the person is Overweight or their weight is over 90
const isHighRisk = isOverweight || weightKg > 90;

// isOverweight = false
// weightKg > 90
// 75kg > 90kg = false
// false || false = false

// Display result in Console
console.log("Name:", personName );
console.log("BMI:", bmi.toFixed(2));
console.log("Underweight:", isUnderweight);
console.log("Normal Weight:", isNormalWeight);
console.log("Overweight:", isOverweight);
console.log("High Risk Alert:", isHighRisk);

