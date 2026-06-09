/*

## Beginner Level

*/

// 1. Create a function named `greet` that prints `"Hello World"`.

function greet(){
    console.log("Hello World");
}

greet();

// 2. Create a function `add(a, b)` that returns the sum.

function add(a,b){
    return a+b;
}
console.log(add(7,88));

// 3. Write a function to calculate the square of a number.

function square(n){
    console.log("Square of Number is :" ,n*n);
}

square(22);

// 4. Create a function that checks whether a number is even or odd.

function checkNumber(num){
    if(num % 2 === 0) return "even";
    else return "odd";
}

console.log(checkNumber(44));

// 5. Write a function that converts Celsius to Fahrenheit.

function tempConvert(temp){
    let fahrenheit = (temp * 9)/5 + 32;
    return fahrenheit;
}

console.log(tempConvert(35));


// 6. Create a function with default parameter `"Guest"`.
function meet(name="guest"){
    console.log(`${name} is coming soon`);
}

console.log(meet("Vishwa"));
console.log(meet());

// 7. Write a function that returns the greater of two numbers.

function greaterNo(num1,num2){
    if(num1 > num2) return num1;
    else return num2;
}

console.log(greaterNo(8,44));

// 8. Create a function to calculate area of rectangle.

function areaRectangle(l,b){
    return l * b;
}

console.log(areaRectangle(4,55));


// 9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.
function isAdult(age){
    if(age >= 18) console.log("Adult");
    else console.log("Minor");
}


// 10. Create a function to reverse a string.
function reverseStr(str){
    let rev = str.split("").reverse().join("");
    return rev;
}

console.log(reverseStr("Anjan"));


/*

## Intermediate Level






6. Write a callback function example using `setTimeout`.
7. Create a higher-order function that executes another function twice.
8. Write a function that returns another function.
9. Create a pure function for subtraction.
10. Create an impure function using global variable modification.

*/

// 1. Write a function expression for multiplication.

let multiply = function(a,b){
    return a * b;
}

console.log(multiply(4,99));

// 2. Convert a normal function into an arrow function.

// normal function 

function sqrt(num){
    return Math.sqrt(num);
}
console.log(sqrt(99));

let sqrtA = num=>{ return Math.sqrt(num)};
console.log(sqrtA(9));

// 3. Create a function that accepts unlimited numbers and returns their sum using rest operator.
function sum(...rest){
    let total = 0;

    for(let num of rest){
        total += num;
    }
    return total;
}

console.log(sum(3,4,5,6));

// 4. Write a function that counts vowels in a string.
function vowels(string){
    let count = 0;
    let str = string.toLowerCase();
    for(let i=0; i<str.length; i++){
        if(str[i] === 'a' ||
            str[i] === 'e' ||
            str[i] === 'i' ||
            str[i] === 'o' ||
            str[i] === 'u'
        ){
            count += 1;
        } 
    }
    return count;
}

//   if("aeiou".includes(str[i])){

console.log("Total vowels are" ,vowels("hy buddy, what's going on"));


// 5. Create a function that checks if a string is palindrome.

function palindrome(str){
    for(let i=0; i<str.length; i++){
        for(let j=str.length-1; j>=0; j--){
            if(str[i] !== str[j]){
                return "Not Palindrome"
            }else{
                i++;
                j--;
            }
        }
    }
    return "Palindrome";
}

console.log(palindrome('madam'));


/* 
JS                   vs              Java

Mostly company and big company prefer Java , becuase JS we have predefined function.
-> In JS DP part is remaning , that will be upload.
-> In java 8hr content will be upload.
-> DSA doesn't depend on any language.
-> short note on Java , long note also provide to us.
-> Logic building --> keep practise.
--> How to watch the lecture -> maintain the excel sheet --> today date --> today learning --> one week later --> revise
--> 2-3 times revison --> you are taking help if not able to solve it 
-> Algo --> Is make by mathematicain it takes 6monts to 1 year.
-> Better Approach to solve --> Problem statement

--> 1. TIme take to solve the problem , after seing the answert it look easy.
--> Company --> select --> Progressive thinking.

--> Competiive Programming vs DSA

-> Quality question not quantity 

--> Pick the question --> Give the quwstion 10-15 min brute force then search for hint , algo samjha 
--> 1 question take 1 hour , small concept you stuck there.

--> Distraction/Procrastation / Self Pity(bechara) / inconsistency

--> Long sitting to solve,  collectively result 
--> Development you saw smething build dopamine result , Dsa give you result on after 2-3 months.

--> You want to achieve something , then you have to put efforts , you have to done to there life.

--> In Ai era DSA is required --> client problem statment --> algo write to for food delivery .

-->  Scalable, maintable, trustable --> we can do it for that need thinking , or prompting .








*/