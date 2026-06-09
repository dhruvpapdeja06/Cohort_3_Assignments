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
console.log(typeof percentileMarks,percentileMarks);
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