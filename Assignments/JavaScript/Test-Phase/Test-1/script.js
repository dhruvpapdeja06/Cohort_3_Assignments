/* Arrays */

// Question 1 (Easy) — Find Expensive Products | Maximum Element | Min Element

let prices= [100,250,500,150,700];

/*  max element */

let max = Math.max(...prices); // here prices is an array , we have to convert into numeric values.
console.log("Maximum prices is : " ,max);  // if val can't change into number then it gives us NaN --> In Non-Numeric value

// Math.max() --> -Infinity when no arguments pass

/* second way */
let max_elem = prices[0];

for(let i=0; i<prices.length; i++){
    if(prices[i] >= max_elem ){
        max_elem = prices[i]
    }
}

console.log(max_elem);


/* 3rd way  --> by using reduce  */

let maxVal = prices.reduce((a,b)=> Math.max(a,b) ,-Infinity);
console.log(maxVal);

/*   Create a new array containing only prices greater than 300.   */
let new_prices = [];
for(let val of prices){
    if(val > 300 ){
        new_prices.push(val);
    }
}

console.log(new_prices);

/* 2nd way */

let newPrices = prices.filter(e => e > 300);

console.log("New Price Value is :" ,newPrices);


/*    
Question 2 (Moderate) — Student Average

Calculate the average marks of all students.

*/

let marks= [80,90,70,85,95];

/* by using reduce method  */

let totalMarks = marks.reduce((acc,current)=>{
    return (acc + current);
},0)

let avgMarks = totalMarks/marks.length;
console.log("Avg Marks is :", avgMarks);


/*  2nd Method  */

let total = 0;
for(let val of marks){
    total += val;
}

let avg_marks = total/marks.length;
console.log("Student Average Marks is : ",avg_marks);



/*  

Question 3 (Hard) — Most Frequent Number

Find the number that appears the most.

When JavaScript sees that the object 0 does not have a key named , it unique[0]assumes its value undefined.

Array.prototype.map()method (used totransform arrays) and the Map constructor object( (a key-value data structure)

*/

let numbers= [1,2,3,2,4,2,5,1,1,1];

let unique = {};

for(let i=0; i<numbers.length; i++){
    // unique[i]  here index is 0 that give us undefined 
    let num = numbers[i];
    if(unique[num]){
        unique[num] += 1;
    }else{
        unique[num] = 1;
    }
}

// console.log(unique);

let frequency = 0;
let maxFreq ;

// for(let [key,val] of Object.entries(unique)){
//     if(val > maxFreq){
//         maxFreq = val;
//         frequency = key;
//     }
// }

for(let key in unique){
    let val = unique[key];
    if(val > maxFreq){
        maxFreq = val;
        frequency = key;
    }
}

console.log(`${frequency} appears ${maxFreq} times`); 

// 2nd- way of doing the same work

// Map is designed for key-value storage and is often preferred over plain objects.

let freqMap = new Map();

for(let num of numbers){
    freqMap.set(num,(freqMap.get(num) || 0) + 1); 
}

console.log(freqMap);

/* 3rd way -> using reduce */

let maxf = numbers.reduce(function(acc,curr){
    acc[curr] = (acc[curr] || 0 ) + 1;
    return acc;
},{})

console.log(maxf);


/*  4th way --by sorting */

let sortArr = numbers.sort((a,b)=>a-b);
console.log(sortArr);

let currentCount = 1;
let maxCount = 1;
let mostFrequent = sortArr[0];

for(let i=1; i<=sortArr.length; i++){
    if(sortArr[i] === sortArr[i-1]){
        currentCount++;
    }else{
        currentCount = 1;
    }

    if(currentCount > maxCount){
        maxCount = currentCount;
        mostFrequent = sortArr[i];
    }
}

console.log(mostFrequent,maxCount);

/*

Question 4 (Easy) — Update User Age

Update age to 21.


*/
letuser= {
name:"Ritik",
age:20
};

letuser.age = 21;
console.log(letuser.age);


/*    

Question 5 (Moderate) — Print User Information



*/

/* 1st way  */

letuser= {
name:"Ritik",
age:20,
city:"Bhopal"
}

let newUser = {};
for(let key in letuser){
    val = letuser[key];
    let k = key.charAt(0).toUpperCase() + key.slice(1);
    newUser[k] = val;
}

console.log(newUser);

// 2nd way
for(let [key,val] of Object.entries(letuser)){
    let k = key.charAt(0).toUpperCase() + key.substring(1);
    console.log(k);
}

// 3rd way
let updateUser = Object.fromEntries(
    Object.entries(letuser).map(([key,val])=>[key.charAt(0).toUpperCase() + key.slice(1),val])
);

console.log(updateUser);


/*  

Question 6 (Hard) — Highest Paid Employee

Find the employee with the highest salary.

*/

let employees= {
aman:25000,
ritik:50000,
priya:45000
};

let maxSal = employees.aman;
let person = Object.keys(employees)[0];
for(let [key,val] of Object.entries(employees)){
    if(val > maxSal){
        maxSal = val;
        person = key;
    }
}

console.log("Person whose sal is max :",person, "maxSal is "+maxSal);

// 2nd way

let salMax = Math.max(...Object.values(employees));

let p = Object.keys(employees).find(key => employees[key] === salMax);
console.log(p);

// 3rd way
let sortEmp = Object.entries(employees).sort((a,b)=> b[1] - a[1]);
console.log(sortEmp);


/*  

Question 7 (Easy) — Greeting Function
Create a function:
greet(name)

*/

function greet(name){
    console.log("Welcome " +name);
}

greet("Ankit");


/*   

Question 8 (Moderate) — Discount Calculator
Create a function:
calculateDiscount(price)
Rules:
10% discount

*/

function calculateDiscount(price){
    let afterDiscount = (price * 10)/100;
    let priceAfterDicount = price - afterDiscount;
    return priceAfterDicount;
}

console.log(calculateDiscount(1000));

/*

Question 9 (Hard) — Dynamic Sum Function
Create a function:

sum(...numbers)
that can add any amount of numbers.

*/

function sum(...numbers){
    let total = numbers.reduce((acc,curr)=>{
       return  acc + curr;
    },0)
    return total;
}

console.log("sum of no is ",sum(3,7,10,2));

/*  Arrays + Objects + Functions Together */

/*

Question 10 (Easy) — Find Adult Users

Create a function:
getAdults(users)

Return only users whose age is 18 or above.


*/

letusers= [{ name:"Ritik", age:20 },
{ name:"Aman", age:16 },
{ name:"Priya", age:25 }
];

function getAdults(users){
    return users.filter(({age})=> age > 18);
}

console.log(getAdults(letusers));


/*

Question 11 (Moderate) — Shopping Cart Total

Create a function:
getCartTotal(cart)


*/

letcart= [
{ name:"Mouse", price:500, qty:2 },
{ name:"Keyboard", price:1000, qty:1 },
{ name:"Monitor", price:10000, qty:1 }
];

function getCartTotal(cart){
    return cart.map((elem)=> elem.price * elem.qty).reduce(((acc,curr)=> acc + curr),0);
}

console.log("Total cart price is ",getCartTotal(letcart));


/*  

Question 12 (Hard) — Student Grade Report

Create a function:
generateReport(students)



*/

letstudents= [
{
name:"Ritik",
marks: [80,90,85]
},
{
name:"Aman",
marks: [50,40,60]
}
];

function generateReport(students){
    return students.map(function(student){
        let total = student.marks.reduce((acc,curr)=> acc + curr ,0);

        let avg = total/student.marks.length;

        let grade;
        if(avg > 80){
            grade = "A";
        }else if(avg > 60 && avg <=80){
            grade = "B";
        }else{
            grade = "C";
        }

        return {
            name: student.name,
            average: avg,
            grade: grade
        };

    });
}

console.log(generateReport(letstudents));


/* 
Final Challenge (Very Hard)
Mini Library Management System

Create:

addBook(title,author)
borrowBook(id)
returnBook(id)
showAvailableBooks()

O/P

{
id:1,
title:"Atomic Habits",
author:"James Clear",
borrowed:false
}
*/

// Mini Library Mangement System

let library = [];
let nextId = 1

function addBook(title,author){



    let book = {
        id: nextId++,
        title,
        author,
        borrowed: false
    }

    library.push(book);
}

addBook("Atomic Habits","James Clear");
console.log(library);

function borrowBook(id){
    let book = library.find(book => book.id === id);
    
    if(book){
        book.borrowed = true;
        return book;
    }
}

console.log(borrowBook(1));



function showAvailableBooks(){
    return library.filter(book => !book.borrwed)
}

console.log(showAvailableBooks());

function returnBook(id){
    let book = library.find(book => book.id === id);

    if(book){
        book.borrowed = false;
        return book;
    }
}

console.log(returnBook(1));
