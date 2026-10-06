// let n =  Number(prompt("Enter the number :"));
// if ( n>0 );
// {
//     console.log("Number is positive")
// }

// // else if(n<0); 
// // {
// //   console.log("Number is negative")
// // }

// let n = Number(prompt("enter the number "));
// if ( n%2==0)
// {
// console.log(n, "number is even")
// }
// else {
//     console.log(n,"Number is odd");
// // }
// let y = Number(prompt("enter the year:"))
//  if(y %4==0 || y % 400==0){

 
//     console.log(y, "It is a leap year")}
//     else{
//         console.log((y,"It is not leap year"))
//     }
  

// let num2 =  Number(prompt("Enter the 1st number:"))
// let num1 = Number(prompt("Enter the 2nd number:"))

// if ( num1>num2){
//     console.log(num1,"NUmber 1 is greatest")
// }
// else if(num1< num2){
//     console.log(num2, "Nmuber 2 is greatest")
// }

// else{
//     console.log("IT is Equal")
// }
// let num1 =  Number(prompt("Enter the 1st number:"))
// let num2 = Number(prompt("Enter the 2nd number:"))
// let num3 = Number(prompt("Enter the 3rd number:"))


// if ( num1>num2 && num1> num3){
//     console.log(num1,"NUmber 1 is greatest")
// }
// else if(num2>num1 && num2>num3){
//     console.log(num2, "Nmuber 2 is greatest")
// }
// else if (num1==num2 && num2 == num3){
//     console.log("All numbers are equal")
// }

// else{
//     console.log("Number 3 is greatest")
// }
// let n =  Number(prompt("Enter the number :"));
// if ( n%5==0 )
// {
//     console.log("Number is Divisible by 5")
// }

// else  
// {
//   console.log("Number is not divisible by 5")
// }
// Write a program to check whether a given character is a vowel or a consonant.

// let x = prompt("Enter the alphabet:")
// if(x=="a"||x=="e"||x=="i"||x=="o"||x=="u")
// {
//     console.log("Alphabet is vowel")
// }
// else {
//     console.log("Alphabet is consonant")
// }
//Write a program to check whether a student has passed or failed an exam. (Passing marks = 40).

// let marks = Number(prompt("Enter the percentage : "))

// if( marks >= 40){
//     console.log(marks,"You are passed")
// }
// else {
//     console.log("You are failed")
// }
//Write a program that checks whether a given number is within the range 10 to 50 or not.

// let n = Number(prompt("Enter the numnber"))
// if (n >=10 && n<=50){
//     console.log("You arte in a range")

// }else{
//      console.log("You are not in a range")
// }
// \--> Write a program to check if a number is multiple of 3, multiple of 7, or neither.

// let n = Number(prompt("Enter the numnber"))
// if (n% 7==0 && n% 3==0)
// {
//      console.log("Number is divided by 3&7")
// }
// else if(n% 7==0)
// {
//      console.log("Number is divided by 7")
// }
// else if(n % 3==0 ){
//     console.log("Number is divided by 3")
// }
// else {
//     console.log("Nmuber is not Divisible")
// }
// // - A shopkeeper gives a 10% discount if the purchase amount is more than 500.
// //  Otherwise, no discount. Write a program to check discount eligibility.

// // let n = Number(prompt("Enter the Price:"))
// // if ( n>500 ){
// //    let b=n- (n*0.1); 
// // console.log("Your discounted amount:",b)}
// // else{
// //     console.log("your not eligible for discount final price:",n)
// // }


// //      A person can vote if his/her age is 18 or above. Otherwise, not eligible. Write a program.

// // let age = Number(prompt("Enter the age:"))
// // if ( age>=18)
// // {
// //     console.log("Eligible for vote")
// // }
// // else{
// //     console.log("Not eligible for vote")
// // }



// // - A traffic light shows Red → Stop, Yellow → Wait, Green → Go.
// //  Write a program to print the action based on the light color.

// let light = prompt("Enter the colour:")
// light=light.toLowerCase()
// if(light=="yellow"){
//     console.log("Please wait")
// }
// else if(light=="red"){
//     console.log("Please Stop")
// }
// else if(light=="green"){
//     console.log("Please GO")
// }
// else {
//     console.log("Not valid colour")
// }



// - A student’s grade is decided as:

// Marks ≥ 90 → Grade A
// Marks ≥ 75 → Grade B
// Marks ≥ 50 → Grade C

// Otherwise → Fail
// Write a program to assign grade.

// let marks = Number(prompt("Enter the Marks you obtained:"))

// if (marks>= 90) {
//     console.log("Grade A")
// }
// else if (marks>= 75) {
//     console.log("Grade B")
// }
// else if (marks>= 50) {
//     console.log("Grade c")
// }
// else {
//     console.log("Fail")
// }


// - Write a program to check whether a person is child (0–12),
//  teen (13–19), adult (20–59), or senior citizen (60+).

// let age = Number(prompt("Enter the age:"))
// if ( age<=12)
// {
//     console.log("You are a child")
// }
// if ( age<=13 && age>=19)
// {
//     console.log("You are a teen")
// }
// if ( age<=20 && age >=59)
// {
//     console.log("You are a adult")
// }
// else {
//     console.log("You are a Senior citizen")
// }


// - A cinema ticket costs 200. If the person’s age is below 12, ticket costs 100. If age is above 
// 60, ticket costs 150. Otherwise, normal price. Write a program

// let age = Number(prompt("enter your age"))

// if(age<= 12){
//     console.log("the cost of your ticket is 100")
// }
// else if(age>= 60){
//     console.log("the cost of your ticket is 150")
// }
// else {
//     console.log("the cost of your ticket is 200")
// }

// - A company gives a bonus to employees: If experience ≥ 5 years, bonus = 10,000 else bonus = 5,000.
//  Write a program to calculate bonus.

// let e = Number(prompt("enter your experience"))
// if (e>= 5)
// {
//     console.log("Your bonus is 10,000")
// }
// else 
// {
//     console.log("Your bonus is 5,000")
// }


// - A weather app shows:

//     Temp < 0 → "Freezing Weather"
//     Temp 0–20 → "Cold Weather"
//     Temp 21–35 → "Normal Weather"
//     Temp > 35 → "Hot Weather"
    // Write a program
  

    // - An ATM allows withdrawal only if amount ≤ balance. 
    // Otherwise, print “Insufficient Balance”. Write a program.


    // let bal = Number(prompt("Enter your balance"))
    //    let amount = Number(prompt("Enter your Amount "))

    //    if (amount<= bal)
    //    {
    //     console.log("Withdrawing Money")
    //    }
    //    else{
    //     console.log("Insufficient balance")
    //    }

    // - A student gets scholarship if marks ≥ 85. Otherwise, no scholarship. Write a program.

    // let marks = Number(prompt("Enter the marks you obtained:"))
    // if(marks>= 85){
    //     console.log("Eligible for scholarship")
    // }
    // else{
    //     console.log("NO Scholarship")
    // }