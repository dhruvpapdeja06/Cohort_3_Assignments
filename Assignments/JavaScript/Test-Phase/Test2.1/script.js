/*  Part 3: Functions (20 Questions) 
----------------------------------------------------------------------------------*/

/*
🟢 Easy Level (Q1 - Q7)
These questions focus on understanding function creation, parameters,
arguments, and return values.

Question 1 — Greeting Function
Create a function:
greet(name)
that prints:
Hello Ritik

when called with:
greet("Ritik")

Scenario
A website wants to greet users after login.

*/

function greet(name){
    console.log("Hello ",name);
}

greet("Rititk");


/*
Question 2 — Add Two Numbers
Create a function:
add(a,b)
that returns the sum.
Example:
add(10,20)
Output:
30

Scenario
Calculator application.

*/

function add(a,b){
    return a+b;
}

console.log(add(9,3));


/*
Question 3 — Find Square
Create a function:
square(num)
that returns the square of a number.
Example:
square(5)
Output:
25

Scenario
Math utility app.


*/

function square(num){
    return num*num;
}

console.log(square(22));

/*
Question 4 — Check Even Number
Create a function:
isEven(num)


Return:
true

if the number is even, otherwise:
false

Scenario
Number validation system.


*/

function isEven(num){
    return num % 2 == 0 ? true : false;
}

console.log(isEven(7));


/*
Question 5 — Default Username

Create a function:
greet(name="Guest")
Example:
greet()
Output:

Hello Guest

Scenario

User visits without logging in.


*/

function meet(name="Guest"){
    console.log("Hello",name);
}

meet();
meet("Ishan");

/*

Question 6 — Celsius to Fahrenheit
Create a function:
convertTemp(celsius)
Formula:
(celsius*9/5)+32

Scenario
Weather application.
Concepts Tested
Functions
Return Values


*/

function convertTemp(celsius){
    return (celsius * 9)/5 + 32;
}

console.log(convertTemp(37));


/*
Question 7 — Arrow Function Practice

Convert this function:
functionmultiply(a,b) {
returna*b;
}
into an arrow function.

*/

let functionmulitply = (a,b)=> a*b;
console.log(functionmulitply(8,9));


/*
🟡 Moderate Level (Q8 - Q14)
These questions require combining multiple function concepts.
-----------------------------------------------------------------------------------
Question 8 — Discount Calculator
Create:
calculateDiscount(price)
Apply:
10%

discount.
Example:
calculateDiscount(500)
Output:
450

Scenario
E-commerce website.


*/

let calculateDiscount = (price)=>{
    let discountPrice = (price * 10)/100;
    return price - discountPrice;
}

console.log(calculateDiscount(500));


/*

Question 9 — Largest of Three Numbers
Create:

findLargest(a,b,c)
Return the largest number.
Example:
findLargest(10,50,20)
Output:
50

Scenario
Ranking system.


*/

function findLargest(a,b,c){
    if( a > b && a > c) return a;
    else if ( b > c) return b;
    else c;
}

console.log(findLargest(9,45,20));


/*

Question 10 — Reverse String
Create:

reverseString(str)
Example:
reverseString("hello")
Output:
"olleh"

Scenario
Text processing application.
*/

function reverseString(str){
    let rev = "";
    for(let i=str.length-1; i>=0; i--){
        rev += str[i];
    }
    return rev;
}

console.log(reverseString("hello"));

/*
Question 11 — Count Vowels

Create:
countVowels(str)
Example:
countVowels("javascript")
Output:

3

Scenario
Text analysis tool.


*/

/*
function countVowels(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] == "a" || 
            str[i] == "e" ||
            str[i] == "o" ||
            str[i] == "i" ||
            str[i] == "u" ){
            count += 1;
        }   
    }
    return count;
}
    */



function countVowels(str){
    let count = 0;
    let vowels = ['a','e','i','o','u'];

    for(let char of str.toLowerCase()){
        if(vowels.includes(char)) count++;
    }

    return count;
}

// extra spaces -->  str.replace(/\s+/g, ' ');
// return str.match(/[aieou]/gi)? .length ?? 0  // match return an array of vowels, if empty then null.length --> typeerror
console.log(countVowels("javascript"));


/*
Question 13 — Dynamic Sum Function
Create:
sum(...numbers)
Example:
sum(1,2,3,4)
Output:
10

Scenario
Calculator app.

*/

function sum(...numbers){
    let total = 0;
    for(let num of numbers){
        total += num
    }
    return total;
}

console.log(sum(2,3,4,5));

/*

Question 14 — Login Validation
Create:
login(username,password)
Rules:
username==="admin"

Phase 2 Practice Sheet 36

password==="1234"
Return:
"Login Successful"
or
"Invalid Credentials"

Scenario
Authentication system.

*/

function login(username,password){
    if(username === "admin" && password === "1234"){
        console.log("Login Successfully");
    }else{
        console.log("Invalid Credentials");
    }
}

login("admin","1234");

