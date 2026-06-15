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


/* Part 4: Arrays + Objects + Functions (20
Questions)
------------------------------------------------------------------------------------
*/

/*

🟢 Easy Level (Q1 - Q7)

Question 1 — Find Adult Users


Create:
getAdults(users)
Return only users whose age is 18 or above.

Scenario
A website only allows adults to register.


*/

let users= [
{ name:"Ritik", age:20 },
{ name:"Aman", age:16 },
{ name:"Priya", age:25 }
];

function getAdults(user){
    return user.filter((e)=> e.age > 18);
}

console.log(getAdults(users));

/*


Question 2 — Product Names Extractor

Create:
getProductNames(products)
Return:
["Laptop","Mouse"]

Scenario
A dropdown only needs product names.

*/

let products= [
{ name:"Laptop", price:50000 },
{ name:"Mouse", price:500 }
];

function getProductNames(products){
    return products.map((product)=>product.name);
}

console.log(getProductNames(products));

/*
Question 3 — Find User By Name

Create:
findUser(users,username)

Scenario
Search bar functionality.
What is this question asking?
Find a specific object based on a property value.

*/

let customer = [
{ name:"Ritik" },
{ name:"Aman" },
{ name:"Priya" }
];

function findUser(customer,username){
    return customer.find((user)=> user.name === username);
}

console.log(findUser(customer,"Priya"));


/*

Question 4 — Total Marks

Create:
getTotalMarks(students)
Return:
240


*/

let students= [
{ name:"Ritik", marks:80 },
{ name:"Aman", marks:90 },
{ name:"Priya", marks:70 }
];

function getTotalMarks(students){
    let total = 0;
    students.forEach((user)=> total += user.marks);
    return total;

}

console.log(getTotalMarks(students));

/*

Question 5 — Available Products

Return only products whose stock is greater than zero.

Scenario
Show only available products.


*/

let product= [
{ name:"Mouse", stock:10 },
{ name:"Keyboard", stock:0 },
{ name:"Monitor", stock:5 }
];

function availProducts(product){
    return product.filter((item)=> item.stock > 0);
}

console.log(availProducts(product));


/*
Question 6 — Add New Student

Create:
addStudent(students,student)
which adds a student to the array.

Scenario
Student admission system.
What is this question asking?
Create a reusable function that updates data.


*/
/* if new array want
function addStudent(students,student){
    return [...students,student];
}

console.log(addStudent(students,{name: "Ishan Sharma",age: 24}));

*/

/*  Change in the origional one 
function addStudent(students,student){
    students.push(student);
    return students;
}

console.log(addStudent(students,{name: "Kamal Tomar", age: 26}));
*/


/*
If your goal was to replace a student's name */

function addStudent(students,oldName,newName){
    return students.map((stu)=> stu.name === oldName ? {...stu,name:newName}:stu);
}

console.log(addStudent(students,"Aman","Mota bhai"));

/*
Question 7 — Count Premium Products

Count products costing more than ₹10,000.
Scenario
Analytics dashboard.


*/

let items= [
{ name:"Laptop", price:50000 },
{ name:"Phone", price:30000 },
{ name:"Mouse", price:500 }
];

function premiumProducts(items){
    return (items.filter((prod) => (prod.price > 10000))).length;
}

console.log(premiumProducts(items));

/* ---------------------------------------------------------------*/

/*
🟡 Moderate Level (Q8 - Q14)

Question 8 — Shopping Cart Total

Create:
getCartTotal(cart)

Scenario
Checkout page.


*/

let cart= [
{ name:"Mouse", price:500, qty:2 },
{ name:"Keyboard", price:1000, qty:1 },
{ name:"Monitor", price:10000, qty:1 }
];

function getCartTotal(cart){
    return cart.reduce((acc,curr)=> acc + (curr.price * curr.qty),0);
}

console.log(getCartTotal(cart));

/*

Question 9 — Student Average Generator

Create:
getAverageMarks(students)
Return average for each student.
Scenario
School Report Card.
*/

let emp = [
{ name:"Ritik", marks: [80,90,85] },
{ name:"Aman", marks: [70,75,80] }
];

function getAverageClassMarks(emp){
    let totalMarks = 0;
    let totalStudent = 0;
    emp.forEach((student)=>{
        totalMarks += student.marks.reduce((acc,curr)=> acc+ curr,0)
         totalStudent += student.marks.length;
});
    return totalMarks / totalStudent;
}
   
console.log(getAverageClassMarks(emp));

function getAvgMarks(emp){
    return emp.map((student)=>{
        const total = student.marks.reduce((sum,next)=> sum + next,0);

        return {
            student : student.name,
            avg : total / student.marks.length

        }
    })
}

console.log(getAvgMarks(emp));

/*
Question 10 — Inventory Search

Create:
findProductById(id)

Scenario
Product detail page.

*/

let
inventory= [{ id:1, name:"Laptop" },
{ id:2, name:"Mouse" },
{ id:3, name:"Monitor" }
];

function findProductById(inventory,id){
    return inventory.find((product)=> product.id == id);
}

console.log(findProductById(inventory,2));


/*

Question 11 — Usernames Generator

Phase 2 Practice Sheet 50


Return:
[
"ritik_rajput",
"aman_gupta"
]

Scenario
Registration system.

*/

let user_reg = [
{ name:"Ritik Rajput" },
{ name:"Aman Gupta" }
];

function usernameGenerator(user){
    return user.map((username)=> username.name.toLowerCase().replace(" ","_"));

}

console.log(usernameGenerator(user_reg));


/*

Question 12 — Highest Scoring Student

Find the highest scorer.
Scenario

Phase 2 Practice Sheet 51

School Topper List.

*/

let test = [{ name:"Ritik", marks:85 },
{ name:"Aman", marks:95 },
{ name:"Priya", marks:75 }
];

function highestScore(emp){
    return emp.reduce((acc,curr)=> acc.marks > curr.marks ? acc : curr);
}

console.log(highestScore(test));


function highestScor(emp){
    let sort = [...emp].sort((a,b)=> b.marks - a.marks);
    console.log(sort[0]);
}

// test.sort((a, b) => a.name.localeCompare(b.name));
highestScor(test);



/*

Update Product Stock
Create:
updateStock(id,quantity)
that updates stock of a specific product.
Scenario
Warehouse management.
What is this question asking?
Locate the object.
Update one property.


*/

let stock = [{
    id:1,
    quantitiy: 5,
    name: "Laptop",
    price : 33300
},{
    id:2,
    quantitiy: 2,
    name: "Cover",
    price : 330
},{
    id:3,
    quantitiy: 88,
    name: "cover",
    price : 100
}]

function updateStock(stock,id,quantity){
    return stock.map((item)=> item.id === id ? {...item,quantity : quantity}: item)
}

updateStock(stock,3,10);
console.log(stock);

/*

Question 14 — Sort Students by Marks
Sort

[
{name:"A", marks:70},
{name:"B", marks:95},
{name:"C", marks:80}
]
from highest to lowest.

*/

let sort = [
{name:"A", marks:70},
{name:"B", marks:95},
{name:"C", marks:80}
]

function highMark(sort){
    return( [...sort].sort((a,b)=>b.marks - a.marks));

}

console.log(highMark(sort));