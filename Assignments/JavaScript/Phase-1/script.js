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

*/

// 1. Round `4.7` using `Math.round()`.


console.log(Math.round(4.7));
console.log(Math.round(0.5));
console.log(Math.round(1.500)); // convert a decimal to nearest integer

// 2. Find the square root of 81.
console.log(Math.sqrt(81));
console.log(Math.sqrt(10));

// 3. Find the maximum number from `10, 20, 5, 99`.
console.log(Math.max(10,20,5,99));

// 4. Generate a random number between 1 and 10.
console.log(Math.floor(Math.random()*10+1));

// 5. Convert `"99.99"` into an integer.
let int = 99.99;
console.log(parseInt(int));
console.log(Math.trunc(int));  // remove decimal


// 6. Check whether `25` is an integer or not.
let check = 25.555;
console.log(typeof(check) === "number"); // give true even if float

//2. way
console.log(Number.isInteger(check));

//3.way
console.log(check % 1 === 0);

// 7. Use `toFixed(2)` on `3.141592`.
let fix = 3.141592;
console.log(fix.toFixed(2));




/*  

## Conditionals
---



*/

// 1. Check whether a number is positive or negative.

// fail for -0 test case
let sample = -0;
if(sample >= 0){
    console.log("Positive Number");
}else{
    console.log("Negative Number");
}

//sign
console.log(Math.sign(-0));
console.log(Math.sign(-11.11));
console.log(Math.sign(-100.01)); 


console.log(-0 == 0);
console.log(-0 === 0);
console.log(Object.is(0,-0));
console.log(Object.is(-4,-0));
console.log(NaN === NaN); //f
console.log(Object.is(NaN,NaN)); //t
console.log([] === []); //f
console.log(Object.is([],[])); //f

console.log("testing");
console.log(Object.is(-0,-0));
console.log(Object.is(5,0));

/*  

 truthy or falsy value

 1. false— Boolean false value.
  2. 0— Zero (positive zero). 
  3. -0— Negative zero. 
  4. 0n— BigInt zero.
   5. ""Or ''— Empty string.
    6. null— No value. 
    7. undefined— Value not defined.
     8. NaN— Not a Number.


*/

//test
let myList = [];
if(myList.length !== 0){
    console.log("Working");
}else{
    console.log("Not Working");
}

// 2. Check whether a number is even or odd.
let guess = 99;
if(guess % 2 == 0){
    console.log("even");
}else{
    console.log("Odd");
}

// 3. Check whether a person is eligible to vote.

let isEligible = 18;
if(isEligible >= 18){
    console.log("Eligible to vote");
}else{
    console.log("Not Eligible for vote");
}

// 4. Find the largest among two numbers.

let first = 64;
let second = 48;
let third = 66

if(first > second){
    console.log("First Number is largest");
}else{
    console.log("Second Number is largest");
}


// 5. Find the largest among three numbers
if(first > second && first > third){
    console.log("First is largest");
}else if(second > third){
    console.log("Second is largest");
}else{
    console.log("Third is largest");
}


// 6. Check whether a year is a leap year.

//  year must be divisible by 4 , but not by 100. However, if the year is divisible by 400
let year = 80;
if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log("Leap Year");
}else{
    console.log("Not a Leap Year");
}

// 7. Check whether a number is divisible by both 3 and 5.
let empty = [];
for(let i=1; i<=20; i++){
    if(i % 3 == 0 && i % 5 == 0){
        empty.push(i);      
    }
}
console.log(empty);

/*
8. Create a simple grading system:
- 90+ → A
- 75+ → B
- 50+ → C
- below 50 → Fail */

let marks = 88;
if(marks > 90){
    console.log("Grade A");
}else if(marks > 75 && marks <= 90){
    console.log("Grade B")
}else if(marks > 50 && marks >= 75){
    console.log("Grade C");
}else{
    console.log("fail");
}



// 1. Check whether a character is a vowel or consonant.

let char = "z";
let vowels = "aeiouAEIOU";
if(vowels.includes(char)){
    console.log(`${char} Vowel`);
}else{
    console.log(`${char} consonant`);
}


// 2. Create a calculator using `switch` statement.
let operand_1 = 7;
let operand_2 = 5;
let operator = "/";
switch(operator){
    case "+":
        console.log(`Sum of No is ${operand_1 + operand_2}`);
        break;
    case "-":
        console.log(`Sub of two No is ${operand_1 - operand_2}`);
        break;
    case "*":
        console.log(`Mul of two No is ${opearnd_1 + operand_2}`);
        break;
    case "/":
        if(operand_2 === 0 ){
            console.log("Not possible");
        }
        else{
            console.log(`Div of two no is ${operand_1/operand_2}`);
        }
        break;
    default:
        console.log("No Operation");
}


// 3. Print the day name based on a number (1–7).
let day = 1;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Not present");
}


// 4. Check whether a username is `"admin"` and password is `"1234"`.
let username = "admin";
let password = "1234";

if(username === "admin" && password === "1234"){
    console.log("Authenticate");
}else{
    console.log("Not Authenticate");
}


/* 

## Truthy & Falsy
*/


// 1. Check whether an empty string is truthy or falsy.

//Empty falsey if space then truthy
if(""){
    console.log("Truthy");
}else{
    console.log("Falsy");
}


// 2. Check whether `0` is truthy or falsy.
if(0){
    console.log("Execute");
}else{
    console.log("Not Execute"); // 0 falsy
}

// 3. Check whether `[]` is truthy or falsy.
if([]) console.log("Run"); //[] truthy
else console.log("Not Run"); 

// 4. Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`.
let h = "hello";
if(h){
    console.log("Woking");
}else console.log("Not Working");


/*  
Ternary Operator



*/

// 1.Check whether a number is even or odd using ternary operator.
let test1 = 99;
console.log(test1 % 2 == 0 ? "even": "odd");

// 2.Check whether age is above 18 using ternary operator.
let Age = 22;
console.log(Age >= 18 ? "Adult" : "Minor");


// 3.Find the greater number between two values using ternary operator.
console.log(operand_1 > operand_2 ? operand_1: operand_2);

/* 

## Mixed Practice Questions

*/

// 1. Create a mini biodata program using variables and template literals.
let empName = "Dhruv";
let empAge = 26;
let empSkills = ["HTML","CSS","JavaScript"];
let profession = "Engg";
let isAvailableForWork = true;

let bio = `
    ======================================
                    Bio Data
    ======================================
    Name :  ${empName}
    Age : ${empAge}
    Profession : ${profession}
    Skills : ${empSkills.join(", ")}
    Available : ${isAvailableForWork} 
    }
    
    `


console.log(bio);

// 2. Calculate the area of a rectangle.
let length = 55;
let breadth = 4;
let area = length * breadth;
console.log(area);


// 3. Calculate the simple interest.
let p = 100;
let r = 8;
let t = 2;

let S_I = (p*r*t)/100;
console.log(S_I);


// 4. Convert temperature from Celsius to Fahrenheit.
let celsius = 45;
let fahrenheit;

fahrenheit = ( celsius * 9)/5 + 32;

console.log(fahrenheit + "F");

// 5. Convert kilometers into meters.
let distance = "140km";
let conv = parseInt(distance);
let inMeter = conv * 1000;
console.log(inMeter + "m");


// 6. Calculate total marks and percentage of 5 subjects.
let math = 78;
let english = 88;
let physics = 79;
let chemistry = 92;
let hindi = 68;

let total = math + english + physics + chemistry + hindi;
let percent = (total/500)*100;
console.log(percent + "%");

// 7. Calculate electricity bill based on units consumed.

// under 100 --> 5Rs , 100-200 --> 7Rs , 200-300 --> 8RS

let units = 210;
if(units <= 100){
    console.log(`Electricity Bill of ${units} is : ${units * 5}Rs` );
}else if(units >100 && units<= 200){
    let last = 100 * 5;
    let above = units - 100;
    console.log(`Electricty bill of ${units} is : ${(above * 7) + last}`);
}else{
    let current = units - 200;
    console.log(`Electricty Bill of ${units} is : ${(current * 8) + 500  + 700}`);
}

// 8. Create a username generator using first name and birth year.
let fname = "Ishan Sharma";
let fbirth = 2002;

let [uname] = fname.trim().split(" ");
let fName = uname + fbirth;
console.log(fName);

// 9. Check whether a string starts with a specific letter.
let client = "Vaibhav";
let match = "v";

if(client.toLowerCase().startsWith(match)){
    console.log("Client first letter starts with " +match);
}else{
    console.log("Client first letter not starts with " +match);
}


// 10. Count the total characters in a sentence excluding spaces.
let slogan = "I Love my India.";
console.log(slogan.length);
slogan = slogan.replaceAll(" ","");  // or regex /\s/g,"" with replace
console.log(slogan.length);


/* 

## Logical Thinking Questions


*/

// 1. Take two numbers and print which one is greater.

let firstNo = Number(prompt("Enter the first Number"));
let secondNo = Number(prompt("Enter the second Number"));

if(firstNo >= secondNo){
    console.log("First Number");
}else{
    console.log("Second Number");
}

// 2. Check whether a number lies between 10 and 50.
let noLies = Number(prompt("Enter a Number"));
if(noLies < 50 && noLies > 10){
    console.log(`Yes ${noLies} lies between 10 and 50`);
}else{
    console.log(`${noLies} not lies between 10 and 50`);
}


// 3. Check whether a password length is greater than 8.
let pwdLen = "Prtk";
if(pwdLen > 8){
    console.log("Yes Password lenght is greater than 8");
}else{
    console.log("No, Password lenght is smaller than 8");
}

/*
4. Check if a person can drive:
- age > 18
- has license = true

*/

let ageToDrive = 29;
let hasLicense = false;

if(ageToDrive > 18 && hasLicense){
    console.log("You can drive");
}else{
    console.log("You can't drive");
}


// 1. Check whether a number is divisible by 2, 3, or both.
let Num = 12;
if(Num %2 === 0 && Num % 3 ===0) console.log("Number s");
else if(Num % 2 == 0) console.log("Divisible by 2");
else if(Num % 3 == 0 ) console.log("Divisible by 3");
else console.log("Not Divisible by 2 and 3");


// 3. Find whether a number is a multiple of 10.

let checkMul = 30;
if(checkMul % 10 == 0){
    console.log("Number is multiple of 10");
}else{
    console.log("Number is not mulitple of 10");
}

// 4. Create a simple discount calculator.
let price = 1200;
let discount = 20;

let discountPrice = (price * discount)/100;

let finalPrice = price - discountPrice;
console.log(finalPrice);

// 5. Print `"Good Morning"`, `"Good Afternoon"`, or `"Good Evening"` based on time.

let hours = new Date().getHours();
if(hours < 12){
    console.log("Good Morning");
}else if(hours < 16 && hours >= 12){
    console.log("Good Afternoon");
}else{
    console.log("Good Evening");
}


// 6. Check whether a product is in stock.
let stock = {
    'milk' : 3,
    'butter' : 1,
    'salt' : 0
}

if(stock.milk > 0) console.log("Milk is in stock");
else console.log("Milk is not in stock");
if(stock.butter > 0) console.log("Butter is in stock");
else console.log("Butter is not in stock");
if(stock.salt > 0) console.log("Salt is in Stock");
else console.log("Salt is not in stock");

// 6. Calculate final bill after GST.

let productPrice = 600;
let gst = 18;
let afterGst = (productPrice * gst)/100;
let finalPriceGST = productPrice + afterGst;
console.log(finalPriceGST);

/*
## Challenge Questions for Beginners

*/

// 1. Generate a random OTP of 4 digits.
let randomNo = Math.floor(Math.random()*9000+1000);
console.log(randomNo);

// 2. Reverse a 3-letter string manually.
let revStr = "cat";
// let rev = "";
/*
for(let i=revStr.length-1; i>=0; i--){
    rev += revStr[i];
}
console.log(rev);

*/
let rev = revStr.split("").reverse().join("");
console.log(rev);

// 3. Find the last character of a string.
let lastChar = revStr[revStr.length-1];
console.log(lastChar);

// 4. Convert a full name into uppercase initials.
let full_name = "Vishal Bhardwaj";
console.log(full_name.toUpperCase());

// 5. Check whether two strings are equal ignoring case sensitivity.
let userNo1 = "JavaScript";
let userNo2 = "javaScript";
if(userNo1.toLowerCase() === userNo2.toLowerCase()){
    console.log("Strings are equal");
}else{
    console.log("Strings are not equal");
}

// 6. Create a simple login validation system.
let savedUsername = "Admin";
let savedPassword = "Tatka";

let enterPassword = "tatka";
let enterUsername = "admin";

if(savedPassword.toLowerCase() === enterPassword.toLowerCase() && savedUsername.toLowerCase() === enterUsername.toLowerCase()){
    console.log("User valid");
}else{
    console.log("User Invalid");
}

// 7. Find whether a number is a 2-digit or 3-digit number.
let Num_1 = -66;
if(Num_1 >= 10 && Num_1 <= 99){
    console.log("2-digit Number");
}else if(Num_1 >= 100 && Num_1 <= 999){
    console.log("3-digit Number");
}else{
    console.log("Neither 2 digit or 3 digit number");
}

// OR
let digitNo = Math.abs(Num_1);
let digitStr = digitNo.toString();
console.log(digitStr);


// 8. Create a mini ATM balance checker.

let customerName = "Gaurav";
let customerPin = 25022;

let enterPin = 25022;

// Account balance
let balance = 5000;

// minimumBalance;
let minimumBalance = 1000;

//action 
let action = "withdraw";

let Amount = 2000;

//Transaction History
let history = [];

if(customerName === "Gaurav" && customerPin === enterPin){
    console.log("Cutomer and Pin verified");
    // Check Balance
    if(action === "checkBalance"){
        console.log("Current balance is :",balance);
        history.push("Checked Balance");
    } // Deposit
    else if(action === "deposit"){
        if(Amount > 0){
            balance += Amount;
            console.log("Deposit Successfully");
            console.log("Updated Balance is :" ,balance);
            history.push("Deposited" ,Amount);
        }else{
            console.log("Invalid Deposit Amount");
        }
    }// withdraw
    else if(action === "withdraw"){
        if ((balance - Amount)>= minimumBalance){
            balance -= Amount;
            console.log("withdraw successfully");
            console.log("Remaining Balace : ",balance);
            history.push("Withdraw",Amount);
        }else{
            console.log("Insufficent Balance");
            console.log("Minimum Balance of",minimumBalance,"Must be maintained");
        }
    }
    else {
        console.log("Invalid ATM Action");
    }
}else{
    console.log("Invalid CustomerName or Invalid Pin");
}






// 9. Simulate a traffic light system using `switch`.
let signal = "red";

switch(signal){
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("green");
        break;
    case "yellow":
        console.log("Get Ready");
    default:
        console.log("Invalid Signal");
}

// 10. Build a small marksheet generator using variables and conditionals.


let Physics = 89;
let Maths = 92;
let Chemistry = 78;
let clgName = "Kamal";

let TotalMarks = (Physics + Maths + Chemistry);

let Percent = (TotalMarks/300)*100;
let grade;
if(Percent > 80){
    grade = "A";
}else if(Percent > 70 && Percent <=80 ) grade = "B";
else if(Percent > 60 && Percent <= 70) grade = "C";
else if(Percent > 50 && Percent <= 60 ) grade = "D";
else{
    console.log("Fail");
}

console.log("======== College Marksheet =======");
console.log("Name:" + clgName);
console.log("Physics",Physics);
console.log("Chemistry",Chemistry);
console.log("Maths",Maths);

console.log("Total :",TotalMarks);
console.log("Percentage:" ,Percent);
console.log("Grade :" ,grade);