/* Phase-2   */

/*    

Part 1: Arrays (20 Questions)

🟢 Easy Level (Q1 - Q7)
These questions focus on understanding arrays, accessing values, basic
methods, and simple iteration.

Question 1 — Find Expensive Products

Create a new array containing only prices greater than ₹300.

*/

let prices= [100,250,500,150,700];

let newPrice = prices.filter(function(price){
    return price > 300;
})

console.log(newPrice);

/*   

Question 2 — Last Student in Class

Print the last student's name.

*/
let students= ["Aman","Ritik","Priya","Rahul"];

console.log("Last Student name is : ",students[students.length-1]);


/*
Question 3 — Add New Product

Add "Monitor" to the end of the array.

*/

let products= ["Laptop","Mouse","Keyboard"];

let length = products.push("Monitor");  // if i console it give me the length
console.log(products, length);

/*  

Question 4 — Remove Last Notification
 

*/

let notifications= [
"Order Placed",
"Order Shipped",
"Order Delivered"
];

notifications.pop()

console.log(notifications);


/*

Question 5 — Check User Exists

Check if "Ritik" exists.

*/

let users= ["Aman","Ritik","Priya"];

let user = users.find(user=>user === "Ritik");  // return the value like "Ritik"

let u = users.some(user=> user === "Ritik"); // return true or false
console.log(user?"Exits":"Not-Exists");

let test = users.includes("Ritik");
console.log(test);

/*
Question 6 — Convert Marks to Percentage

Create a new array where each mark is followed by % .

*/
let marks= [80,90,70];

let percentileMarks = marks.map((mark)=> mark+"%");
console.log(typeof percentileMarks,percentileMarks); //obj
console.log(typeof JSON.stringify(percentileMarks));

/*   
Question 7 — Count Products

Print total number of products.

*/
let cart= [
"Mouse",
"Keyboard",
"Monitor",
"Laptop"
];

console.log("Total Number of products is : ",cart.length);

/*
🟡 Moderate Level (Q8 - Q14)
These questions require combining multiple concepts.

*/

/*
Question 8 — Student Average

Find average marks.

*/

let markss= [80,90,70,85,95];

let totalMarks = markss.reduce(((acc,curr)=> acc + curr),0);

let avgMarks = totalMarks/markss.length;
console.log(avgMarks);

/*
Question 9 — Even Numbers Finder

Return all even numbers.

Scenario
Filter numbers for a report.
*/

let numbers= [1,2,3,4,5,6,7,8];

let evenNo = numbers.filter((num)=> num % 2 == 0);
console.log(evenNo);


/*
Question 10 — Product Search

Find the index of "Keyboard" .
Scenario
You need the product position.

*/

let product= [
"Laptop",
"Mouse",
"Keyboard",
"Monitor"
];


/* first way */
let productSearch = product.findIndex((product) => product === "Keyboard"); // findIndex return 1 or -1 
console.log(productSearch);


/* second day */
let searchProduct = product.find((item) => item === "Keyboard");  // it basically return the element if exits
// let index = product.indexOf("Keyboard"); // directly use 
let index = product.indexOf(searchProduct);
console.log(index);


/* filter */
let targetIndex = -1;
let pp = product.filter((item,index)=>{
    if(item === "Keyboard"){
    targetIndex = index;
    return true;
    }
    return false; 
})

console.log(targetIndex);


/* 4th way */

let filterArray = product.filter((item) => item === "Keyboard");

// console.log(filterArray);
let idx = product.indexOf(filterArray[0]);

console.log(idx);



/*

Question 11 — Total Revenue

Calculate total revenue.
Scenario
Store owner wants today's earnings.

*/

let sales= [500,700,1000,300];

let totalRev = sales.reduce((acc,curr)=> acc + curr ,0);
console.log(totalRev);


/*

Question 12 — Uppercase Usernames

Convert every username into uppercase.

Scenario
Preparing usernames for display.

*/

let username = ["ritik","aman","priya"];

let upperUser = username.map((name)=> name.toUpperCase());
console.log(upperUser);


/*

Question 13 — Find First Adult

Find the first age greater than or equal to 18.

Scenario
Age verification system.
*/

let ages= [12,15,17,19,22];

let verificationAge = ages.find((age)=> age > 18);
console.log(verificationAge);

/*

Question 14 — Positive Number Check

Phase 2 

Practice Sheet 7


Check if every number is positive.
Scenario
Validate data before processing.

*/

let nums= [5,8,10,3];

let isPositive = nums.every((num)=> num > 0);
console.log(isPositive);


/*

🔴 Hard Level (Q15 - Q20)
These require logic building and problem-solving.

Question 15 — Most Frequent Number

Find the number that appears the most.
Scenario
Website wants to know the most searched category.

*/

let numbersFreq= [1,2,3,2,4,2,5,1,1,1];

let mostSearch = {};

for(let num of numbersFreq){
    let idx = num;
    if(!mostSearch[idx]){
        mostSearch[idx] = 1;
    }
    else{
        mostSearch[idx] += 1;
    }
}

let freq = 0;
let mostFrequent = 0;

for(let key in mostSearch){
    if(mostSearch[key] > mostFrequent){
        mostFrequent = mostSearch[key];
        freq = key;
    }
}

console.log(mostSearch);
console.log(freq,mostFrequent);

/*

Question 16 — Second Largest Number

Find the second largest number.
Scenario
Leaderboard runner-up.

*/

let second = [10,50,20,80,40];

/* 1st way */
let sortArr = second.sort((a,b)=> a -b);
let secondLargest = console.log(sortArr[sortArr.length-2]);

/* 2nd way */
let maxNum = second[0];
let secondNum = -Infinity;

for(let i=1; i<second.length; i++){
    if(second[i] > maxNum){
        secondNum = maxNum;
        maxNum = second[i];
    }else if(second[i] < maxNum && second[i] > secondNum ){
        secondNum = second[i];
    }
}
console.log(secondNum);

/*
Question 17 — Remove Duplicates

Create a new array with unique values.

Scenario
Duplicate user IDs should not exist.
*/

let ids= [1,2,2,3,4,4,5,5];

let unique = [];

for(let num of ids){
    if(!unique.includes(num)){
        unique.push(num);
    }
}
console.log(unique);

/* 2nd way */
let uniq = [...new Set(ids)];  // set will give you an obj then spread operator convert into array
console.log(uniq);

/* 3rd way */
let uniquee = [];
for(let i=0; i<ids.length; i++){
    let isDuplicate = false;
    for(let j=0; j<uniquee.length; j++){
        if(ids[i] === uniquee[j]){
            isDuplicate = true;
            break;
        }
    }
    if(!isDuplicate){
        uniquee[uniquee.length] = ids[i];
    }
}

console.log(uniquee);


/* 
Question 18 — Longest Word

Find the longest word.
Scenario
Text analytics system.

*/

let words= [
"JavaScript",
"HTML",
"CSS",
"Programming"
];

let firstMax = 0;

let maxLength = words.map((word) => word.length);
console.log(maxLength);

let maxLen = Math.max(...maxLength);
console.log(maxLen);

let targetIdx = maxLength.indexOf(maxLen);
console.log(targetIdx);

console.log(words[targetIdx]);

/* 2nd way */
let fMax = "";

for(let i=0; i<words.length; i++){
    if(words[i].length > fMax.length){
        fMax = words[i];
    }
}
console.log("Max word is :",fMax);

/*
Question 19 — Rotate Array Right

Scenario
Carousel slider rotates items.
*/

let rotateArr = [1,2,3,4,5];

/* 1st way */
function rotate(array){
    let last = array.pop();
    return array.unshift(last); // change in the origional array
    
}

// rotate(rotateArr);
// console.log(rotateArr);


/* 2nd way
let temp = rotateArr[rotateArr.length-1];


for(let i=rotateArr.length-1; i>0; i--){
    rotateArr[i] = rotateArr[i-1];
}
rotateArr[0] = temp;
console.log(rotateArr);

 */

/* 3rd way  --> rotate by 2 */
let k = 2;

for(let i=0; i<k; i++){
    let temp = rotateArr[rotateArr.length-1];
    for(let j=rotateArr.length-1; j>0; j--){
        rotateArr[j] = rotateArr[j-1];
    }
    rotateArr[0] = temp;
}

console.log(rotateArr);

// rotateArr.unshift(...rotatArr.splice(-2));

/*
Question 20 — Best Selling Product

Find the product sold the most.

Scenario
E-commerce analytics dashboard.

*/

let sale= [
"Mouse",
"Keyboard",
"Mouse",
"Laptop",
"Mouse",
"Keyboard"
];

let mostSales = {};
for(let item of sale){
    if(!mostSales[item]){
        mostSales[item] = 1;
    }else{
        mostSales[item] += 1
    }
}

console.log(mostSales);


// ----------------------------------------------------------------------------------------

/*
Part 2: Objects (20 Questions)

🟢 Easy Level (Q1 - Q7)
These questions focus on creating, accessing, updating, and deleting object
properties.

Question 1 — Access User Name

Task
Print the user's name.
Scenario

A profile page needs to display the logged-in user's name.

*/

let User = {
name:"Ritik",
age:21,
city:"Bhopal"
};

console.log(User.name);


/*

Question 2 — Update User Age


Task
Update age to 22.

Scenario
Today is the user's birthday.

*/

let userNme = {
name:"Ritik",
age:21
};

userNme.age = 22;
console.log(userNme);

/*

Question 3 — Add Country


Task
Add a property:
country:"India"

Scenario
The registration form now requires country information.

*/

let userN= {
name:"Ritik",
city:"Bhopal"
};

userN.country = "India";
console.log(userN);

/*
Question 4 — Delete Property

Phase 2 Practice Sheet 14


Task
Delete the password property.
Scenario
Sensitive information should not be sent to the frontend.

*/


let emp= {
name:"Ritik",
age:21,
password:"12345"
};

console.log("Before Deletion:",emp);
delete emp.password;
console.log("After Deletion:",emp);


/*
Question 5 — Check Property Exists


Task
Check if the object contains a property called "price" .
Scenario
Before displaying the product price, you want to make sure it exists.


*/
// includes --> work on array and strings

let Product= {
name:"Laptop",
price:60000
};

let productKey = Object.keys(Product);

let hasPrice = productKey.includes("price");
console.log("Exists",hasPrice);

/* 2nd way */
console.log(Product.hasOwnProperty("price")); // true


/*
Question 6 — Print All Keys


Task
Print all property names.
Expected Output
["brand","model","year"]


Scenario
Admin dashboard wants to know available fields.
*/

let car= {
brand:"BMW",
model:"X5",
year:2025
};

// if use for in loop --> return single-single values

/*
for(let key of Object.entries(car)){
    console.log(key[0]);
} 
   Here also get the single values 
*/

let keysArr = Object.keys(car);
console.log(keysArr);


/*
Question 7 — Print All Values
let car= {
brand:"BMW",
model:"X5",
year:2025
};

Phase 2 Practice Sheet 16

Task
Print all values.
Expected Output
["BMW","X5",2025]

*/

let valueArr = Object.values(car).map(String);  // here 2025 is num but i want in string
console.log(valueArr);


// if i want all the data in one array then before map we can use flat()


//--------------------------------------------------------------------------------------------

/*

🟡 Moderate Level (Q8 - Q14)
These questions combine multiple object concepts.

Question 8 — Print User Information Dynamically


Task
Print:
name :Ritik
age :21
city :Bhopal
using a loop.
Scenario


A profile card should automatically display all information.

*/

let stu= {
name:"Ritik",
age:21,
city:"Bhopal"
};

for(let [key,val] of Object.entries(stu)){
    console.log(key,":",val);
}


/*
Question 9 — Employee Salary Increase

Task
Increase salary by 10%.
Scenario
Company announces annual appraisal.


*/

let employee= {
name:"Aman",
salary:50000
};

employee.salary += ((employee.salary * 10)/100);
console.log(employee);


/*

Question 10 — Nested Object Access

Phase 2 Practice Sheet 18


Task
Print:
Bhopal

Scenario
Delivery app needs city information.


*/

let customer = {
name:"Ritik",
address: {
city:"Bhopal",
state:"MP"
}
};

console.log(customer.address.city);



/*
Question 11 — Object Destructuring
let student= {
name:"Priya",
age:20,
course:"BCA"
};

Task
Extract:

name
age
into separate variables.
Scenario
You only need a few properties from a large object.



*/

let student= {
name:"Priya",
age:20,
course:"BCA"
};

let {name,age} = student;
console.log(name,age);


/*

Question 12 — Rename During Destructuring
let student= {
name:"Priya",
age:20
};

Task
Create:
studentName
studentAge

Scenario
Variable names should be more meaningful.


*/

let {name: studentName,age: studentAge} = student;
console.log(studentName,studentAge);


/*
Question 13 — Merge User and Address



Task
Combine both objects.
Scenario
Backend sends user and address separately.
Frontend needs one object.


*/

let cust = {
name:"Ritik",
age:21
};


let address= {
city:"Bhopal",
state:"MP"
};

let detailsCust = {...cust,...address};
console.log(detailsCust); 


/*
Question 14 — Count Object Properties

Task

Phase 2 Practice Sheet 21

Find how many properties exist.
Scenario
Dynamic form validation.
What is this question asking?
Count total keys.


*/

let data = {
name:"Ritik",
age:21,
city:"Bhopal",
country:"India"
};

let totalKeys = Object.keys(data);
console.log("Total Properties : ",totalKeys.length);


//-------------------------------------------------------------------------------

/*

🔴 Hard Level (Q15 - Q20)
These require real-world logic and object manipulation.

Question 15 — Highest Paid Employee


Task
Find the employee earning the highest salary.
Scenario
Company wants Employee of the Month based on salary.


*/

let
employees= {
aman:25000,
ritik:50000,
priya:45000
};
/* 1st way */

let firstMaxSal = employees.aman;
let maxSalEmp = "aman";
for(let key in employees){
    if(employees[key] > firstMaxSal){
        firstMaxSal = employees[key];
        maxSalEmp = key;
    }
} 


console.log(firstMaxSal);


/* 2nd way */
let maxIncome = Math.max(...Object.values(employees));

let maxIncomeEmp = Object.keys(employees).find((emp)=> employees[emp] === maxIncome);

console.log(`Person whose salary is maximum is : ${maxIncomeEmp} and there salary is ${maxIncome}`);


/*
Question 16 — Most Used Programming Language


Task
Find the language with the highest votes.
Scenario
Survey results dashboard.
What is this question asking?
Find the largest value in an object.


*/

let votes= {
JavaScript:25,
Python:30,
Java:15,
Cpp:10
};


let lang = Object.fromEntries([
    Object.entries(votes).reduce((acc,max)=> acc[1] > max[1] ? acc : max )    
])
console.log(lang);

/*

Question 17 — Reverse Key Value

Task
Convert into:
{
Delhi:"India",
Tokyo:"Japan",
Paris:"France"
}

Scenario
Search by capital city instead of country.


*/

let countries= {
India:"Delhi",
Japan:"Tokyo",
France:"Paris"
};

let revCity = Object.fromEntries(
    Object.entries(countries).map(([key,val])=>[val,key])
)

console.log(revCity);


/*
Question 18 — Student Marks Summary


Task
Calculate total marks.
Scenario
Generate report card.

*/

let Marks= {
math:90,
science:80,
english:85
};

let totalMarkss = Object.values(Marks).reduce((acc,curr)=> acc + curr);
console.log(totalMarkss);


/*  
Question 19 — Find Missing Property


Task
Check whether:
email
exists.
If not, add:



email:"Not Provided"

Scenario
Incomplete profile detection.


*/

let profile = {
name:"Ritik",
age:21
};

/*

for(let key in profile){
    if(key !== "email"){
        profile.email = "Note provided";
    }
}

  3rd way */

profile.email = profile.email || "Not provided";


/*
if(!profile.hasOwnProperty("email")){
    profile.email = "Not provided";
}

*/

console.log(profile);


/*
Question 20 — Product Inventory Analyzer

Task
Find:
1. Total items in stock.
2. Product with highest stock.
3. Product with lowest stock.
Scenario
Inventory management dashboard.


*/

let inventory= {
mouse:25,
keyboard:10,
monitor:5,
laptop:2
};

let totalItems = Object.values(inventory).reduce((curr,next)=> curr + next);

console.log("Total items in stocks", totalItems);

let highestStk = Math.max(...Object.values(inventory));
let loweststk = Math.min(...Object.values(inventory));
let highestStock = Object.fromEntries(
    Object.entries(inventory).map(([stock,val])=> val === highestStk?[stock,val]:null).filter(Boolean))

console.log(highestStock);

/* min stock */
let minStock = Object.fromEntries([
    Object.entries(inventory).reduce((min,current)=> current[1] < min[1]? current : min)
]);

console.log("minStock",minStock);