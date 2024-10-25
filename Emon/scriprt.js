
/* - - - - ALL OF JAVASCRIPT - - - - */

/* Values in Javascript: 

7 Primitive Data Types:

1. Strings: Charecters within "" or '' or ``
2. Numbers: Floating numbers with decimals
3. Booleans: Logical True or False
4. Undefined: empty value
5. Null: empty value
6. Symbol
7. BigInt: Larger intiger type numbers
*/
        // Variables are like a box containing the Values

/* Variable Naming Convention:
1. Camelcode: myFirstName
2. cannot use number in the beginning of a variable
3. cannot use reserved keywords of javascript
4. use capital letters for Constant values like PI = 3.1415
5. you can use $ symbol or _ symbol in variable names
*/

//******* DATA TYPE ********************
let x = true;
console.log(x);

console.log(typeof true);
console.log(typeof x);
console.log(typeof 23);
console.log(typeof "Tokyo");
console.log(typeof 'Tokyo');

//Re-assigning value of a variable and changing the type of Data
x = "Yess!" //here x is not a new variable, just the value is re-assigned
console.log(x);
console.log(typeof x);

//undefined type of Data
let undvar;
console.log(undvar);
console.log(typeof undefined);

//Type of null is object
console.log(typeof null);

/*There are three types of variables
1. let
2. const
3. var

We can re-assign the value of a let variable
We can not re-assign the value of const variable
var variable is old type of variable in Javascript
*/


//------- TYPES OF VARIABLES -----------------

let age = 23;
age = 31
console.log(age); //the value of age is changed to 31

const birthYear = 1995;
// birthYear = 2000; //the value will not change
// console.log(birthYear);
// you can not assign a undifined value to a const variable
// const birthYear;

// let is block scoped and var is function scoped***



//------- OPERATORS -----------------

// const ageJoha = 2025 - 1995;
// const ageToha = 2025 - 1999;
// console.log(ageJoha, ageToha);

/*----math operators---------*/
const thisYear = 2025;
const ageJoha = thisYear - 1995;
const ageToha = thisYear - 2007;
console.log(ageJoha, ageToha);

console.log(ageJoha * 2, ageToha / 2, 2 ** 3); //2 to the power 3

/*----Concatenate Strings---------*/
const firstName = 'Fahim'
const lastName = 'Joha'
console.log(firstName + ' ' + lastName);

/*---assignment operator ------*/
let z = 10 + 5; //15
z += 10; //x = x + 10 == 25
z *= 4; //x = x * 4 == 100
z ++; // x = x + 1 == 101
z --; // x = x - 1 == 100
console.log(z);

/*----Comparison operators -----
----- < > >= <= ----------------*/
console.log(ageJoha > ageToha);
console.log(ageToha >= 18);
console.log(thisYear - 1995 > thisYear - 2007); 

//---Preference index-------
console.log(25 - 10 - 5); //index is set to work from left to right

let a, b;
a = b = 25 - 10 -5; //assignment index is set to work from right to left
console.log(a,b);
//const averageAge = ageJoha + ageToha / 2; //this is not correct, because / operators preference is higher
const averageAge = (ageJoha + ageToha) / 2; //this is correct
console.log(ageJoha, ageToha, averageAge);



/*------STRINGS & TEMPLATE LITERALS------------*/

const fName = 'Fahim';
const job = 'programmar';
const bYear = 2007;
const pYear = 2025;

//use of strings
const fahim = "I'm " + fName + ', a ' + (pYear - bYear) + ' years old ' + job + '!';
console.log(fahim);

//using Template Literals (back ticks)
const fahimNew = `I'm ${fName}, a ${pYear-bYear} years old ${job}!`;
console.log(fahimNew);

//Creating new lines in strings
console.log('String with\n\
    multiple \n\
    lines  ')

//Creating new lines in Template literals
console.log(`String with
    multiple
    lines`)



/*----------TYPE conversion and TYPE coersion---------------*/

//Conversion------
const inputYear = '1980' //here '1991' is a string
console.log(Number(inputYear), inputYear) //using Numnber function converts the string to number
console.log(inputYear + 18); //string concatenate
console.log(Number(inputYear) + 20); //number + number
console.log(Number('fahim')); //converting the string which is not a number will give a NaN (Not a number)
console.log(typeof NaN); //the type of Nan is number!!!! invalid number
console.log(String(23), 23); //converting a number to a string

//Coercion--------
console.log('I am ' + 23 + ' years old'); //Script automatically convert everything into a string
// The + operator triggers coercion to Strings!!!

console.log('23' - '10' - 3); //Script automatically converts everything into numbers
//The - operator triggers coercion to numbers

console.log('23' * '2'); //* operator coerced the type to numbers

let n = '1' + 1;
n = n - 1;
console.log(n);



/*------TRUE and FALSE Values------------
Five Types of False Values: when converted to Boolean
1. 0
2. ''
3. undefined
4. null
5. NaN
Every other values are TRUE------------*/
console.log(Boolean(0)); //False
console.log(Boolean(undefined)); //False
console.log(Boolean('')); //False
console.log(Boolean({})); //True : empty object
console.log(Boolean('fahim')); //True : Strings

const money = 0; //here 0 is a number but its Boolean value is False
if (money) {
    console.log(`Don't spend it all`)
} else {
    console.log(`You should get a job!`)
}

/*------If > else > DECISION MAKING Control Statement------------*/

const driversAge = 15;

if (driversAge >= 18) {
    console.log(`You can have a driving license...🏎️`);
} else {
    const yearsLeft = 18 - driversAge;
    console.log (`You are too young. Wait another ${yearsLeft} years!!`)
}

/*------ Equality Operator ------------*/
const eqAge = 18;//try it with 18 and '18'
if (eqAge === 18) console.log(`You just become an adult (strict equal)`)
if (eqAge == 18) console.log(`You just become an adult (loose equal)`)
//if (eqAge =18) console.log(`You just become an adult`) |This is assignment operator

/*TEST case------
const favourite = Number(prompt(`What is your favourite number?`));
console.log(favourite);
console.log(typeof favourite);
/*
if (favourite === 23) // '23' is not equal to 23
if (favourite == 23){ // '23' is equal to 23

    if (favourite === 23){
    console.log(`23 is amazing`)
} else if (favourite === 7){
    console.log(`7 is amazing`)
} else if (favourite === 9){
    console.log (`9 is also cool!`)
}else {
    console.log (`Neither 23, 7 nor 9`)
}
/* the not equal operator
 loose version: !=
 strict version !==    ...*/



 /* -------- BOOLEAN LOGIC -----------*/

const hasDrivingLicense = true; // A
const hasGoodVision = true; // B
const isTired = false; // C

console.log(hasDrivingLicense && hasGoodVision); // A & B both True
console.log(hasDrivingLicense || hasGoodVision); // A or B is True
console.log(!hasDrivingLicense) //converting True to False

// if (hasDrivingLicense && hasGoodVision) {
//     console.log(`Fahim is able to drive!`)
// } else {
//     console.log(`Someone else should drive!`)
// }

if (hasDrivingLicense && hasGoodVision && !isTired){
    console.log(`Fahim is able to drive!`)
}else {
    console.log(`Someone else should drive!`)
}

/*------RESULT GRADING with If > else > Boolean logic------------*/
const candidateMarks = 51;
if (candidateMarks < 33) {
    console.log(`Your result is F`)
} else if (candidateMarks >= 33 && candidateMarks< 40){
console.log(`Your result is D`)
} else if (candidateMarks >= 40 && candidateMarks< 50){
    console.log(`Your result is C`)
} else if (candidateMarks >= 50 && candidateMarks< 60){
    console.log(`Your result is B`)
} else if (candidateMarks >= 60 && candidateMarks< 70){
    console.log(`Your result is A-`)
} else if (candidateMarks >= 70 && candidateMarks< 80){
    console.log(`Your result is A`)
} else if (candidateMarks >= 80 && candidateMarks<= 100){
    console.log(`Your result is A+`)
} else if (candidateMarks >100){
    console.log(`This marks is invalid!`)
} 


/*----------------SWITCH Statement------------*/

const day = 'friday' //Change the day to check the switch

switch (day) {
    case 'monday':
        console.log(`Bengali Part 1 Exam`)
        console.log(`Bengal Part 2 Exam`)
        break;
    case 'tuesday':
        console.log(`English Exam`)
        break;
    case 'wednesday':
    case 'thursday' :
        console.log(`Mathmatics Exam`)
        break;
    case 'friday':
            console.log(`Jumma Day`)
            break;
    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend`)
        break;
    default:
        console.log(`Not a valid day!`)
}


/*----------------CONDITIONAl Operator------------*/

//General if > else bloc
age = 21;

let drinkOption;
if (age>=18){
    drinkOption = 'wine';
} else {
    drinkOption = 'cola'
}
console.log(drinkOption);

//Simplified conditional expression of the if statement
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

//Using the conditional expression inside a Template Literals
console.log(`I would like to drink ${age >= 18 ? 'wine' : 'water'}`);

let bill = 275
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The tip is ${bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2} `);


/*---------------- FUNCTIONS ------------*/

/* function [declare functions] abcdefg [name of the function] (x,y,z parameter)
{ function body [what you want the function to do]}

*/
function logger(){
    console.log(`I'm emon`);
}
logger();
logger();
logger();
//we can call the function as many times as we wish

function fruitProcessor (apples, oranges){ 
    //values within the parenthesis working as Variables
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`; 
    //This variable is containing the result of the function
    return juice; //We can return the result by calling it in a new variable
}
const appleJuice = fruitProcessor(5, 0);
//Now the new appleJuice variable is capturing the value of the return result
console.log(appleJuice);
console.log(fruitProcessor(5, 0));
//We also can print the result without storing it in a new variable

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
//We can use the function as a machine with different element values

//functions are meant to: DO NOT REPEAT YOUR CODE


/*------- Function Expression -------- */
// function declaration
function calcAge(givenBirthYear) {
    return 2025 - givenBirthYear;
}
const age1 = calcAge(1995);
console.log(age1);

// expression function
const calcAge2 = function (givenBirthYear){
    return 2025 - givenBirthYear;
}
const age2 = calcAge2(1991);
console.log(age2);

// ARROW function (one parameter case)
const calcAge3 = givenbirthYear => 2025 - givenbirthYear;
const age3 = calcAge3(1995);
console.log(age3);

//Calculating years until retirement
const yearUntilRetirement = birthYearNow => {
    const ageNow = 2025 - birthYearNow;
    const retirementIn = 65 - ageNow;
    return retirementIn;
}
console.log(yearUntilRetirement(1995));

// ARROW function (more parameter case)
const yearofRetirement = (birthYearAgain, personName) => {
    const ageAgain = 2025 - birthYearAgain;
    const retirementIn = 65 - ageAgain;
    //return retirementIn;
    return `${personName} retires in ${retirementIn} years`
}
console.log(yearofRetirement(1995, 'Joha'));
console.log(yearofRetirement(2001, 'Toha'));


/*---------------- FUNCTIONS calling FUNCTIONS ------------*/

function cutFruitPieces (fruit) {
    return fruit * 4;
}
function fruitProcess (banana, melon){
    const bananaPieces = cutFruitPieces (banana);
    const melonPieces = cutFruitPieces (melon);
    const newJuice = `Juice with ${bananaPieces} pieces of banana and ${melonPieces} pieces of melon`;
    return newJuice;
}
console.log(fruitProcess(4,2));


// FUNCTION calling function with Boolean logic --------------

const calcPersonAge = function (dobYear) {
    return 2025 - dobYear;
}

const retirementPeriod = function (dobYear, personsName) {
    const personAge = calcPersonAge(dobYear);
    const retirementAt = 65 - personAge;
    if (retirementAt > 0) {
        console.log(`${personsName} retires in ${retirementAt} years`)
        return retirementAt;
    } else {
        console.log(`${personsName} has already retired`);
        return -1;
    }
}
console.log(retirementPeriod(1991, 'Max'));
console.log(retirementPeriod(1958, 'Mike'));



/*-------------------- ARRAYS -----------------*/

const friends = ['Mike', 'Simon', 'Camila', 'Shirely'];
console.log(friends);
const yearssss = [1991, 1994, 2006, 2014, 2024]
console.log(yearssss);

console.log(friends[0]);//Select member by number 0, 1, 2, ..
console.log(friends[2]);
console.log(friends.length); //Total number of element
console.log(friends[friends.length - 1]); //select the last member
//Mutate the member of an Array (Replace)
friends[3] = 'Stan'
console.log(friends);// entire Array can not be replaced

const givenName = 'Munir'
const hasan = [givenName, 'Hasan', 2025-1995, 'programmar', friends];
//we can include every kind of expression with value in an Array
console.log(hasan);

//Functions in Arrays--------------------------
const calcDifer = function (yrinArrey) {
    return 2025 - yrinArrey;
}
const years = [1991, 1994, 2006, 2014, 2024];
const yDifer1 = calcDifer(years[0]);
const yDifer2 = calcDifer(years[1]);
const yDifer3 = calcDifer(years[2]);
const yDifer4 = calcDifer(years[3]);
console.log(yDifer1, yDifer2, yDifer3, yDifer4);
const yDifferences = [calcDifer(years[0]), calcDifer(years[1]), calcDifer(years[2]), calcDifer(years[3])];
console.log (yDifferences);


// ARRAY METHODS -----------------------------
const frndNames = ['Mike', 'Simon', 'Camila'];
//push method to add elements in the end
const newLength = frndNames.push('Magali'); 
console.log(frndNames);
console.log(newLength);

//unshift method to add element in the beginning
frndNames.unshift('Tim'); 
console.log(frndNames);

//pop method to remove element in the end
frndNames.pop();
console.log(frndNames);
const popped = frndNames.pop();
console.log(popped);

//shift method to remove element in the beginning
frndNames.shift(); 
console.log(frndNames);

//indexOf Method: position of an element in the Array
// if the element is not there it will return -1
console.log(frndNames.indexOf('Mike'));

//includes method: position of an element in the Array by true and false
// Strict equality ===
console.log(frndNames.includes('Mike'));
console.log(frndNames.includes('Magali'));

if (frndNames.includes('Mike')){
    console.log('You have a friend called Mike')
}


/*-------------------- OBJECTS -----------------*/
const car = {
    manufacturerName: 'Lamborghini',
    modelName: 'Huracan',
    doors: 2,
    lauchYear: 2024,
    competitors: ['Ferrari', 'Pagani', 'Maserati', 'Porsche']
}
console.log(car);
console.log(car.manufacturerName);
console.log(car['manufacturerName']); 

//Bracket Notation can be used as expression
const nameKey = 'Name';
console.log(car['manufacturer' + nameKey]);
console.log(car['model' + nameKey]);

//example
//const interestedIn = prompt('What do you want to know about the car? Choose between manufacturerName, modelName, doors, launchYear, competitors');
//console.log(car.interestedIn);
// console.log(car[interestedIn]);

// if (car[interestedIn]){
//     console.log(car[interestedIn]);
// } else {
//     console.log('Wrong request!')
// }

//-Adding new element to the OBJECT ---------
car.location = 'Italy'
car['seat'] = 2
console.log(car);



/*------------------ OBJECT METHOD -----------------*/
const sportscar = {
    parentCompany: 'BMW',
    modelName: 'Z4',
    doors: 2,
    launchYear: 2003,
    competitors: ['Mercedez', 'Nissan', 'Toyota', 'Honda'],
    //Function as an element of the Object
    
    
    // calcUsage: function (launchYear){
    //     return 2025 - launchYear;
    // }
    
    // Use of this. method to control an element of the Object
    // calcUsage: function (){
    //     console.log(this);
    //     return 2025 - this.launchYear;
    // }
    //storing the function value as an added element in the object
    calcUsage: function (){
        this.usage = 2025 - this.launchYear;
        return this.usage;
    }

}
console.log(sportscar.calcUsage());
//console.log(sportscar['calcUsage'](2001));

console.log(sportscar.usage);
console.log(sportscar.usage);
console.log(sportscar.usage);