/* 

## Console & Basics

*/

// Coding Answers

// 1. Print `"Hello JavaScript"` in the console.
console.log('"Hello JavaScript"');

// 2. Print your name, age, and city using one `console.log()`.
console.log("Hi, My Name is Dhruv and I am 26 year's old , I live in Noida");


// 3. Print a warning message using `console.warn()`.
console.warn("It can be used for deprecated functions with yellow color");


// 4. Print an error message using `console.error()`.
console.error("Network calls fails or DB conncection, we can use error");


// 5. Use `console.table()` to display an array of 5 numbers.
let student = ["Amit","Ajay","Chetan","Divya"];
console.table(student);


/* -----------------------------------------------------------------------------------------------*/

/*  

## Variables


*/

// 1. Create a variable called `studentName` and store your name in it.
var studentName = "Dhruv";

// 2. Create a variable `age` and print it.
var age;
console.log(age); //undefined

// 3. Create two variables and swap their values.
var num1 = 4;
var num2 = 9;

console.log("Value of num1 is :",num1," Value of num2 is :", num2);
// By using temp variable
var temp = num1;
num1 = num2;
num2 = num1;
temp = null;
console.log("Value of temp is : "+temp);
console.log("Value of num1: "+num1+" Value of num2: "+num2);

// Only two variable
let a = 4;
let b = 9;
a = a + b; //13
b = a - b; // 13 - 9
a = a - b; // 13 - 4
console.log("Value of a : "+a+ " Value of b : "+b);

// shortcut --> array desturcturing
let c = 5; let d =3;
[c,d] = [d,c];
console.log(c,d);

//By using XOR
let e = 10;
let f = 5;

e = e^f;
f = e^f;
e = e^f;
console.log(e,f);

// 4. Create a constant variable for `PI` and print it.
const PI = 3.14;
console.log(PI);

// 5. Declare a variable without assigning a value and print it.
let test;
console.log(test);

// 6. Create a variable `score` and increase it by 10.
let score = 55;
console.log("value of score is: "+score);
score += 10;
console.log("After increasing 10, Value of Score is :"+score);

// 7. Create three variables for first name, last name, and full name.
let firstName = "Ishan";
let lastName = "Sharma";
let fullName = firstName + " " + lastName;
console.log(fullName);

/* 

## Data Types

*/

// 1. Create variables of type string, number, boolean, null, and undefined.
let course = "Cohort-3 from Sheriyans Coding School";
let num = 5500;
let isCompleted = false;
let isPlaced = undefined;
let prizePool = null; // obj

// 2. Check the type of different variables using `typeof`.
console.log(typeof(course));
console.log(typeof(num));
console.log(typeof(isCompleted));
console.log(typeof(isPlaced));
console.log(typeof(prizePool));

// 3. Store your mobile number in a variable and check its type.
let mobNumber = 9358008800;
console.log(mobNumber,typeof(mobNumber));

// 4. Create a variable with value `null` and check its type.
let prize = null;
console.log(typeof(prize));


// 5. Create a bigint number and print it.
let amount = 4867967798746564444444444467n;
console.log(amount);

/* 
## Type Conversion & Coercion




*/

// 1. Convert the string `"50"` into a number.
let strNum = "50";
let n = Number(strNum);
console.log(n,typeof(n));

// 2. Convert the number `100` into a string.
let number = 100;
let no = String(number);
console.log(no,typeof(no));

// 3. Convert `"true"` into a boolean.
let isCheck = "true";
let isValid = Boolean(isCheck);
console.log(isValid,typeof(isValid));

/*
4. Check the output of:
- `"5" + 2`
- `"5" - 2`
- `true + 1`
*/

console.log("5" + 2); // + opertion convert into str --> 52
console.log("5" - 2); // here convert into Number --> 3 number
console.log(true + 1); // Convert into number --> 2

// 1. Create a variable with value `"123abc"` and convert it into a number.
// 2. Use `parseInt()` on `"500px"`.

let zest = "123abc";
let convert = Number(zest); //NaN --> because string can't convert
console.log(convert,typeof(convert));

let px = "500px";
let pix = parseInt(px);
console.log(pix,typeof(pix));

Number("");   // 0
parseInt(""); // NaN

/*   

## Operators


*/

// 1. Add two numbers and print the result.
let n1 = 77;
let n2 = 65;
let result = n1 + n2;
console.log(result);

// 2. Find the remainder when 25 is divided by 4.
console.log(25 % 4);

// 3. Find the square of a number using exponent operator.
let number1 = 17;
let square = 17**2;
console.log(square);

// 4. Increment a variable using `++`.
// 5. Decrement a variable using `--`.
square++;
console.log("After Incrementing the value of square: "+square);
square--;
console.log("Decrementing the value of square: "+square);

// 6. Use `+=` operator to increase a variable by 20.
let zero = 0;
zero += 10;
console.log(zero);

// 7. Compare two numbers using `>`, `<`, `>=`, `<=`.
console.log(5 > 55); //F
console.log( 7 >= 7); //T
console.log(0 < -2); //F
console.log(-7 <= -8); //F 

// 8. Check if two values are strictly equal using `===`.
// 9. Compare `"10"` and `10` using both `==` and `===`.

let value1 = 778;
let value2 = 778;
console.log(value1 === value2);

let val1 = "10";
let val2 = 10;
let val3 = '10';
console.log(val1 == val3);
console.log(val1 == val2);

console.log("strictly check");
console.log(val1 === val3);
console.log(val1 === val2);

// 10. Create two boolean variables and test `&&`, `||`, and `!`.
let bool1 = true;
let bool2 = false;
let bool3 = true;
console.log(bool1 != bool2);
console.log(bool1 != bool3);

console.log(bool1 && bool2); //F
console.log(bool1 || bool2); // T



/*
 
## Strings

*/

// 1. Create a string and print its length.
console.log("-------------");

let tagLine = "India's one of the best AI Intergration Course";
console.log(tagLine.length);


// 2. Convert a string into uppercase.
console.log(tagLine.toUpperCase());

// 3. Convert a string into lowercase.
console.log(tagLine.toLowerCase());

// 4. Check if a string includes the word `"JavaScript"`.
let lang = "JavaScript is single threaded language. JavaScript is sync also."
console.log(lang.includes("JavaScript"));

// 5. Extract the word `"World"` from `"Hello World"`.
let greet = "Hello World";
console.log(greet.split(" ")[1]);

// Replace `"apple"` with `"mango"` in a sentence
let sentence = "Apple juice is very tasty in summer";
console.log(sentence.replace("Apple","mango"));


// 7. Split `"HTML,CSS,JS"` into an array.
let skills = "HTML,CSS,JS"
console.log(skills.split(','));

// 8. Remove extra spaces from a string.
let sent = "   Hey Rohit! What's   up.   ";
console.log(sent.trim().replace(/\s+/g,' '));  //regular expression for one or more extra spaces


// 9. Repeat the word `"Hi"` 5 times.
let repeat = "hi";
console.log(repeat.repeat(5));

// 10. Print the first character of a string.
let str1 = "Today is very hot";
console.log(str1.charAt(0));


// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`
let myName = "Aman";
let myAge = 20;
console.log(`My name is ${myName} and I am ${myAge} years old`);

/*
## Numbers & Math

1. Round `4.7` using `Math.round()`.
2. Find the square root of 81.
3. Find the maximum number from `10, 20, 5, 99`.
4. Generate a random number between 1 and 10.
5. Convert `"99.99"` into an integer.
6. Check whether `25` is an integer or not.
7. Use `toFixed(2)` on `3.141592`.

*/


/*  

## Conditionals

1. Check whether a number is positive or negative.
2. Check whether a number is even or odd.
3. Check whether a person is eligible to vote.
4. Find the largest among two numbers.
5. Find the largest among three numbers.
6. Check whether a year is a leap year.
7. Check whether a number is divisible by both 3 and 5.
8. Create a simple grading system:
- 90+ → A
- 75+ → B
- 50+ → C
- below 50 → Fail
1. Check whether a character is a vowel or consonant.
2. Create a calculator using `switch` statement.
3. Print the day name based on a number (1–7).
4. Check whether a username is `"admin"` and password is `"1234"`.

---

## Truthy & Falsy

*/