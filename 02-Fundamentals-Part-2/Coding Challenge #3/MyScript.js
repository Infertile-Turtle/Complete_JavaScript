/*Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height * 2 = mass / (height * height) (mass in kg and height in meter)*/

/*Your tasks:
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)*/

const mark = {
  fullName: `Mark Miller`,
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: `John Smith`,
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

//WE HAVE TO CALL calcBMI FIRST
//have to call calcBMI and not just mark.BMI because if calcBMI was not called first below then mark.BMI would not have been calculated yet....
// console.log(mark.calcBMI());
// console.log(mark.BMI);

// console.log(john.calcBMI());
// console.log(john.BMI);
/*2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method.*/

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI is higher with a value of ${mark.BMI}. ${john.fullName}'s is lower with a value of ${john.BMI}.`
  );
} else {
  console.log(
    `${john.fullName}'s BMI is higher with a value of ${john.BMI}. ${mark.fullName}'s is lower with a value of ${mark.BMI}.`
  );
}

/*3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.*/
