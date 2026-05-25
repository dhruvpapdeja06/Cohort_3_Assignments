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