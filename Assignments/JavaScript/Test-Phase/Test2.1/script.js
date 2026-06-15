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

/*

🔴 Hard Level (Q15 - Q20)
These questions require problem-solving and function composition.
---------------------------------------------------------------------------------
Question 15 — Factorial Function
Create:
factorial(n)
Example:
factorial(5)
Output:

120

Because:
5×4×3×2×1

Scenario
Math engine.

*/

// recursion --> stack overflow problem
function factorial(n){
    if(n === 1 || n === 0) return 1;

    return n * factorial(n-1);
}

console.log(factorial(5));

// using for loop , while loop

function fact(n){
    let result = 1;
    
    for(let i=2; i<=n; i++){
        result *= i;
    }
    return result;
}

console.log(fact(6));

//1. Memoization or Caching --> to solve recursion problem
// TCO


/*

Question 16 — Palindrome Checker
Create:
isPalindrome(str)
Example:
isPalindrome("madam")
Output:
true

Scenario
Text validation tool.

*/

// same fow while loop --. str.length-1-i
function isPalindrome(str){
    for(let left=0,right=str.length-1; left<right; left++,right--){
        if(str[left] !== str[right]) return "Not Palindrome"
    }
    return "Palindrome";
}

console.log(isPalindrome("madam"));


/*
Question 17 — Password Strength Checker
Create:
checkPassword(password)
Rules:
Password should contain:
At least 8 characters
At least 1 number
Return:
"Strong"

or
"Weak"

Scenario
Registration page.


*/
/*
function checkPassword(password){
    if(password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)){
        console.log("Strong");
    }else{
        console.log("Weak");
    }
}

console.log(checkPassword("Dhruv78600"));

*/

function checkPassword(password){
    if(password.length < 8){
        console.log("Weak Password");
    }

    let hasCaptial = false;
    let hasNumber = false

    for(let i=0; i<password.length; i++){
        let char = password[i];

        if(char >= "A" && char <= "Z"){
            hasCaptial = true;
        }

        if(char >= "0" && char <= '9'){
            hasNumber = true;
        }
    }

    if(hasCaptial && hasNumber){
        console.log("strong Password");
    }else{
        console.log("Weak Password");
    }
}

checkPassword("Ishan7866");

/*

Question 18 — Function Returning Function
Create:
makeMultiplier(multiplier)
Example:
letdouble=makeMultiplier(2);
double(10);
Output:
20

Scenario
Reusable calculation system.


*/

function makeMultiplier(multiplier){
    function mulitply(num){
        return num * multiplier;
    }
    return mulitply;
}

let double = makeMultiplier(2);

console.log(double(10));


/*
Question 19 — Callback Function
Create:
processUser(name,callback)
Example:

processUser("Ritik",welcomeUser);
Output:
Processing User...
WelcomeRitik

Scenario
Backend processing.


*/

function processUser(name,cb){
    console.log("processing User ...");
    cb(name);
}

function welcomeUser(name){
    console.log( `Welcome ${name}`);
}

processUser("Ritik",welcomeUser);


/*

Question 20 — Shopping Bill Generator
Create:
generateBill(items)
Example Input:

Output:


Total:11500

Scenario
E-commerce checkout page.

*/

let cartItems = 
[{ name:"Mouse", price:500 },
{ name:"Keyboard", price:1000 },
{ name:"Monitor", price:10000 }
]

function generateBill(items){
    let total = 0;
    for(let val of items){
        total += val.price;   // 0 + undefined = NaN
    }
    return total;
}

console.log(generateBill(cartItems));