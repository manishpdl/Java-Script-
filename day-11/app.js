// // for each method in array

// let array=[1,2,3,4,"Manish"];
// array.forEach(Manish);

// function Manish(Element,Index,Array)
// {
// console.log(` Element is ${Element}`);
// console.log(`Its Index is ${Index}`);
// console.log(`Given Array is ${Array}`);

// }

//------------------------------------------------------------------------------------//

// Array of Objects

// let Array = [
//   {
//     name: "Manish", Age: "20",
//   },
//   { name: "Aanish", Age: "32" },
//   { name: "Danish", Age: "21" },
// ];
// const copy=[];
// Array.forEach(Print);

// function Print(Element,Index,array)
// {
//     console.log(copy.push(array));
//     console.log(Element.name);

// }
// console.log(copy);
//------------------------------------------------------------------------------------//
//Map() method

// let array=[1,2,3,4,6];

// let new_array=array.map(mul);
// function mul(Element,Index)
// {
// return Element*Index;

// }
// console.log(` Before using Map:${array}`);

// console.log(`After using Map:${new_array}`);

// let student_data = [
//   { name: "Manish", Marks: 90 },
//   { name: "Uanish", Marks: 12 },
//   { name: "Danish", Marks: 10 },
// ];

// let new_data=student_data.map((El)=>{
// console.log( El.name);
// return El.Marks;

// })
// console.log(new_data);
//------------------------------------------------------------------------------------//
//filtermethod

// let array=[1,2,3,4,5,6,7,8,9,10];

// let even=array.filter((Element)=>{
//         if(Element%2==0)
//             {
//                 return Element;
//             }
//     });

// // function check(Element)
// // {
// //     if(Element%2==0)
// //         {
// //             return Element;
// //         }
// // }
// console.log(even);

//  let student_data = [
//       { name: "Manish", Marks: 90 },
//       { name: "Uanish", Marks: 42 },
//       { name: "Danish", Marks: 70 },
//     ];

//  let new_data= student_data.filter((Element,Index)=>{

//         return Element.Marks>50;//this will filter the student data having marks>50

//       });//.map((Element)=>{return Element.Marks}); //from the filtered data it will return only the marks

//  console.log(new_data);

// let array=[1,2,3,4,5,6];
// let odd=array.filter((Element)=>
// {
//     return Element!=2;
// })
// console.log(odd);

//------------------------------------------------------------------------------------//
// 'every' method

// let array=[1,2,3,4,5,6,7];
//  check=(Element)=>(
//     Element>0
//  );

//  console.log(array.every(check));//true

// let array=[1,2,-3,4,5,-60,7];
//  check=(Element)=>(
//     Element>0
//  );

//  console.log(array.every(check));//false

// let array=[2,4,6,10].every((el)=>{
//     if(el%2==0){
//         return el;
//     }
// });
// console.log(array);

//------------------------------------------------------------------------------------//

//reduce method

// let reduce_value=[1,2,3,4,5].reduce((accumulator,Element)=>(
//     accumulator+Element
// ));
// console.log(reduce_value);

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10

//     let array=[1,2,9,6,4,11,0];
//     let Result=array.reduce((max,Element)=>{
// if(max<Element) {return Element; }
// else
// return max;
//     });

//     console.log(Result);

//------------------------------------------------------------------------------------//
//PRACTISE SET-1
// //QN1- CHECK IF ALL NUMBER IN OUR ARRAY ARE MULTIPLE OF 10 OR NOT
// let array=[10,20,30,40];
// let Result=array.every((el)=>{return el%10==0});//we can also use () in this case return not need to be written
// console.log(Result);

//QN2-create a function to find the min number in an array.
// let array=[1,2,10,-30,9,-10];

// function Minimum(array){
// let Result=array.reduce((min,Element)=>
// {
// if(min<Element){return min;}
// else return Element;
// }, array[0]);
// console.log(Result);
// };

// Minimum(array);

//------------------------------------------------------------------------------------//

// Default paramater
//-------------//
// function sum(a,b=5)
// {
//     return a+b;
// }
// console.log(sum(1,2));
// console.log(sum(2));

//  //-------------//

// function sum(a=2,b)
// {
//     return a+b;
// }
// console.log(sum(3,2));
// console.log(sum(1,2));//3
// console.log(sum(2)); //NaN

//------------------------------------------------------------------------------------//

//Spread

//finding min element of array using spread array method
//    let array=[2,3,4,5-2,10,2,3,100,-9,99];
//    console.log(Math.min(...array));

//  let array=[2,3,4,5-2,10,2,3,100,-9,99];
// console.log(...array);
// let name='Manish';
// console.log(...name);

//  //-------------//

//spread in array literals

//  let array=[2,3,4,5-2,10,2,3,100,-9,99];
//  let new_array=[...array];
//  new_array.push(-95);
//  console.log(new_array);
//  console.log(Math.min(...new_array));
//-------------//

//    let name=[..."Manish"];
//    console.log(name);

// merging using spread
// let name = "Manish";
// let surname = "Poudel";
// console.log([...name].join('') + " " + [...surname].join('')); // Outputs: Manish Poudel

//spread with object literals

// const data= {
//     name:"Manish",
//     Age:20,
// };
// let newdata={...data,id:14,country:'Nepal'};//its like creating a newdata object from copying data from data object and also adding id properties

// console.log(newdata);

//convert array to object using spread
// let arr=[1,2,3,4] ;
// console.log({...arr});

//convert string to object using spread
//  let name="Manish";
//  console.log({...name});//key will be assigned by each indices resp.
//  output:{0: 'M', 1: 'a', 2: 'n', 3: 'i', 4: 's', 5: 'h'}

// Qs1. Square and sum the array elements using the arrow function and then find the
//  average of the array

// let array = [1, 2, 3, 4, 5];
// let Square = array.map((element) => {
//   return element * element;
// });
// console.log(Square); //squared array
// let sum = array.reduce((acc, element) => {
//   return acc + element;
// }, 0);
// console.log(sum); //sum of original array

// //sumofasquare
// let sumofasquare = Square.reduce((acc, element) => {
//   return acc + element;
// });
// console.log(sumofasquare); //sum of squared array

// console.log(sumofasquare / Square.length); //average



// qn2  Create a new array using the map function whose each element is equal to the
// original element plus 5

// let original_array=[1,2,3,4,5];
// let new_array=original_array.map((Element)=>
// {
//    return Element=Element+5;
// })
// console.log(new_array);


// qn3 Create a new array whose elements are in uppercase of words present in the
// original array
let original_array=['manish','MANISH','bharatpur','POUDEL'];
let new_array=original_array.filter((Element)=>
{if(Element==Element.toUpperCase())
    {
return Element;
    }

});
console.log(`original array is ${original_array}`);
console.log(`uppercase element in array is ${new_array}`)