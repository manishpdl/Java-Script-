// function scope
// let sum=54;//global scope

// function calsum(a,b){
//     let sum=a+b;//function scope
//    console.log(sum);
// }

// calsum(2,3);
// console.log(sum);

//block scope
// let age=21;
// if(age>=18)
//     {
//         let str="adult";//block scope:
//         console.log(str);
//     }

// console.log(str);    //cannot be accessed becauses it is declared outside but by using var we can

//lexial scope

// function outside()
// {

//     let a=2;
//     let b=3;
//     function inside() // function scope(it cannot be accesed outside the fuction)
//     {
//         let x=5;//its  a block scope cannot accessed outside the {}
//         console.log(`${a},${b}`);
//     }

//     // console.log(x)//but the variable declared inside the function cannot be access outside
//     inside();//it must be called inside the outside function

// }

// outside();

//function expression
//namelss function

// const sum=function(a,b)
// {
//     return a+b;
// }
// console.log(sum(2,3));

// let message=function()
// {
//     console.log("hello");
// }
// message();

//higer order function
//  function displayname(func,count)//higer order function
//  {
//     for(i=0;i<count;i++)
//         {
//             name();
//         }

//  }

// let name=function(){
//     console.log("manish");
// }

// displayname(name,100);

// QN2

// let evenoddfactory = function (request) {
//   if ((request = "odd")) {
//    return function (n) {
//       console.log(!(n % 2 == 0));
      
//     };      

//   } else if ((request = "even")) {
//     return  function (n) {
//       console.log(n % 2 == 0);
//     };
//   } else console.log("wrong request");
// };
// let result=evenoddfactory("odd");
// result(11);


//Method (it is performed in objects )

// const calculator={
//     add:function(a,b){ return a+b},
//     sub:function(a,b){return a-b},
//     mul:function(a,b){return a*b}

// };
// console.log(calculator.mul(2,4));

// Method shorthand
//qn1
// const calculator={
//     add(a,b){return a+b;},
//     sub(a,b){return a-b;}
// };
// console.log(calculator.add(10,5));

//qn2
// const math={
//     random(n){
//         return (Math.floor(Math.random()*n)+1);
//     },
//     pi(){
// return (Math.PI);
//     }
// }
// console.log(math.random(10));


//important practise
//Write a JavaScript function that returns array elements larger than a number. 

// let arr=[1,2,3,4,6];
// function check(arr,n)
// {
//     let result=[];
//     for(i=0;i<arr.length;i++)
//         {
//         if(arr[i]>n)
//             {
//              result.push(arr[i]); 
//             //  console.log(result);
//             }
//         }
//         return result;
        
// }
// console.log(check(arr,3));
// console.log(check(arr,2));
// console.log(check(arr,0));
// console.log(check(arr,4));
// console.log(check(arr,6));

// Write a JavaScript function to extract unique characters from a string. 
// Example: str = “abcdabcdefgggh” ans = “abcdefgh” 

// let str='abcdabcdefgggh';
// let unique='';
// function uniquechar(str){
// for(i=0;i<str.length;i++)
//     {
//    let char=str[i];
//      if(unique.indexOf(char)==-1){
//         unique=unique+char;
//      }

//     }
//     return unique;
// }
// console.log(uniquechar(str));

// another method

//  let str='abcdabcdefgggh';
//  let ans='';

// function uniquechar(str)
// {
//  for(let char of str)
//     {
//         if(ans.indexOf(char)==-1)
//             {
//                 ans=ans+char;
//             }
        
//     }
//     return ans;
// }
// console.log(uniquechar(str));
