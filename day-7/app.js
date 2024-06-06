// chapter-1

// function hello(){
//     console.log("hello");
// }
// function name(){
//     console.log("Manish");
// }
// function loop(){
//     for(let i=1;i<=5;i++)
//         {
//             console.log(i);
//         }
// }
// function isadult(){
//     let age=18;
//     if(age >= 18){
//         console.log("adult");
//     }
//     else{
//     console.log("child");
// }
// }
// isadult();
// hello();
// name();
// loop();

// practise-1

// function roll(){
// console.log( Math.floor(Math.random()*6)+1);
// }
// roll();
// roll();roll();roll();roll();roll();roll();roll();roll();roll();roll();roll();

//chapter-2(function with arguments)

// function fullname(name,age){
//     // console.log(name);
//     alert(`Hello!${name},your age is ${age }`);
// }
// let name=prompt("enter your full Name");

// fullname(name,20);

//Average
// function Avg(a,b,c){
//     console.log(`the AVerage of three  number is ${(a+b+c)/3}`);

// }
// Avg(20,5,35);

//Multuplication table 5*1=5
// function Multiplication(n)
// {
//     for(let i=1;i<=10;i++)
//         {
//             let mul=n*i;
//         console.log(`${n}*${i}=${mul}`)
//         }
// }
// Multiplication(5);

//chapter3(Return Keyword)

// function sum(a,b){

//     return a+b;
// }
// // let add=sum(5,2); // add=sum(sum(1,2),3);
// console.log(sum(5,2));

// function isadult(age)
// {
//     if(age>=18){
//         return "Adult";
//     }
//     else{
//         return "Not Adult"
//     }
//     console.log("This will not reach") //after return the code with not exectuion inside the function
//     }
//     console.log(isadult(20));

// practice-1

// function sum(n) {
//   let sum = 0;
//   for (i = 0; i <= n; i++) {
//     sum = sum + i;
//   }
// return sum;

// }
// let n=30;
// console.log(`the sum of the number from 1 to ${n} is ${sum(n)}`);
//  ;
 
// pratice-2

// function arr(arr1,arr2)
// {
    
//     return arr1.concat(arr2);
// }
// let arr1=[1,2,3,"Manish"];
// let arr2=["Poudel",4,5,6];
// console.log(arr(arr1,arr2));



// practise-3
// let arr=["hi","hello","bye","!"];
// console.log(arr);

// function  concat(arr){
// let result="";
//     for(let i=0;i<arr.length;i++)
//         {
//             result=result+arr[i];
//         }
//         return result;
// }
// console.log(concat(arr));