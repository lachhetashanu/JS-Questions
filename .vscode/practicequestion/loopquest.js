// // -- Write a JS code to display sum off all natural numbers. 

// let n = 100
// let sum =0

// for (let i =0; i<=n; i++){
//     sum= sum+i;
// }
// console.log("sum=",sum)

// -- Write a JS code to display sum off all even 
// numbers from 1 to 100. (also code this question for negative integer)


// let sum = 0

// for (let i = 0; i<=100; i++){

//     if (i % 2==0)
//     {
//         sum= sum+i
//     }


// }

// console.log("sum",sum)

// let sum = 0

// for (let i = 0; i>= -100; i--){

//     if (i % 2==0)
//     {
//         sum= sum+i
//     }


// }

// console.log("sum",sum)

// -- Write a JS code to display sum off all odd numbers from 1 to 100. 
// (also code this question for negative integer)

// let sum = 0

// for (let i = 0; i<=100; i++){

//     if (i % 2!==0)
//     {
//         sum= sum+i
//     }


// }
// console.log("Sum=",sum)

// let sum =0

// for (let i = 0; i>= -100; i--){

//     if (i % 2!==0)
//     {
//         sum= sum+i
//     }


// }

// console.log("sum",sum)


// -- Write a JS code to find the power of a number using for loop
// .(try this question using loops and functions)


// function powerofnum (base,power)
// {
//     let result = 1
//     for (let i = 1; i<=power; i++)
//     {
//         result = result*base
 
//    }
//    return result
// }
// console.log(powerofnum(2,3))

// Write a JS code to find the sign of the product of three numbers.
//  Display an alert box with the specified sign.


// let a = 1
// let b = -5
// let c = -3

// product = a*b*c

// if (product >0){
//     alert("Number is positive")
// }

// else if (product <0){
//     alert("Number is negative")
// }

// else{
//     alert("Number is zero")
// }

//  Write a JS code to print a Fibonacci Sequence Up to a Certain Number. 


// let a = 0;
// let b =1;


// for( let i=0; i<=50; i++)


// {
//     if(a>50){
//         break
//     }
//     console.log(a)

//     let c = a+b;
//     a=b;
//     b = c;

// }


// -- Write a JS code to find N value in the Fibonacci series for a given number. 



// let n = Number(prompt("Enter the number"))

// let a = 0;
// let b = 1;

// for(let i = 1; i<=n; i++)

    
//     {
//         if(a>n)
//         {
//             break
//         }
//         console.log(a)
//      let c = a+b
//      a=b ;
//      b=c;
//     }


// let n = Number(prompt("Enter the number "))
// let sum = 0

// for (let i = 0; i<=n; i++){

//     if (i % 2==0)
//     {
//         console.log(i)
//     }


// }
// -- Given a number n Calculate the factorial of the number. (input should be taken by prompt)


// let n = Number(prompt("Enter the number of factorial"))

// let factorial = 1;

// for(let i =1 ; i<=n ; i++)
// {
//     factorial = factorial*i
// }
// console.log(factorial)

//  Write JS Function to find the sign of the given numbers. (input should be taken by prompt)

// let n = Number(prompt("Enter the number"))

// if ( n >0){
//     console.log("positive integer")
// }
// else if ( n <0)
// {
//     console.log("Negative integer")
// }
// else{
//     console.log("it's zero")
// }
//  Write a JS code using any loop to print all the positive integers from 1 to 100. 
// If a number is multiple of 3, 5, 7 then a msg of multiple will be shown just next to the number


// for (i=1; i<=100; i++)
// {
//     if(i%3==0 ){
//         console.log(i,"MUltiple of 3")
//     }
//      else if(i%5==0 ){
//         console.log(i,"MUltiple of 5")
//     }
//       else if(i%7==0 ){
//         console.log(i,"MUltiple of 7")
//     }
//     console.log(i)
// }

// - Write a JS function that accepts an argument and returns the data type.
//  (input should be taken by prompt)

// function type(n)
// {
//     return type(n)
// }

// let input = prompt("enter the thing:")


//     if (input===true||input===false){
//         input = input=== "true";
//     }

//     else if (!isNaN(input) && input.trim() !==""){
//         input = Number(input);
//     }
// console.log(typeof(input))