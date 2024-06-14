//'this' keyword
// const student={
//     name:'Manish',
//     age:20,
//     eng:95,
//     nepali:80,
//     math:90,
//     getAvg()
//     {
//         console.log(this);//this means student object
//         let avg=(this.eng+this.nepali+this.math)/3;
//     console.log(`${this.name} got marks= ${avg}`);
// }
// }
// student.getAvg();

// function getAvg()
// {
//     console.log(this);
// }
// getAvg();

//try and catch
// with error
// try{
//     console.log(a);
// }
// catch{
//     console.log("a vavriable doesnot exits")
// }

// without error
// let a=6;
// try{
//     console.log(a);

// }
// catch{
//     console.log("a vavriable doesnot exits")
// }

//Arrow function
// let add='';
// const sum=(a,b)=>{
//    add=a+b;
//     console.log(add);
//     // return sum;
// }
// sum(2,3);

// const cube=(sum)=>
//     {
//         return sum*sum*sum;
//     }
// console.log(cube(sum));

// const natural=()=>{
//     for(let i=0;i<=10;i++)
//     {
//         console.log(i);
//     }
//     }
//     natural();

//arrow function with impliit return

// const sum = (a, b) => a + b;
// console.log(sum(2, 3));

//set timeout

//set timeout
// let name=prompt("enter your name");
// console.log("Hello!")

// setTimeout(()=>
// {
//     console.log(`Welcome ${name}`);
// },2000);

// const sum=(a,b)=>(a+b);

//SET INTERVAL

//  let id=setInterval(()=>
//     {
//         console.log("Manish");
//     }

//     ,2000)
//     clearInterval(id);// it is used to stop the interval

//this is Arrow funtion
// const student = {
//   name: "Manish",
//   Course: "BSCCSIT",
//   Address: function () {
//     console.log(this);
//     console.log("chitwan");
//     return this.Course;
//   },

//   Marks: () => {
//     console.log(this);

//     return this.name;
//   },

//   getout:()=>
//     {
//         setTimeout(()=>{
//         console.log("WELCOME")},2000);
//     },
//     getin: function () {
//         setTimeout(()=>{
//         console.log(this);
//         console.log("chitwan");
        
//       },2000);}


//     }


// practise qn 1
// const square = (n) => n * n;

// console.log(square(2));

// practise qn 2
//  setInterval(()=>
//   {
//     console.log("hello world")
//   },2000);


//practise qn3
// const arrayAverage=(array)=>{
  
//   let sum=0;
//  for(let i=0;i<array.length;i++)
//   {
//    sum=sum+array[i];
//   }
//   let avg=sum/array.length;
//   return avg;
// };
// let array=[10,20,30,40,50];
// console.log(arrayAverage(array));


//practise qn4
// const isEven=(num)=>
//   {
//    if(num%2==0){return "even";}
//    else{ return "odd";}
//   };
//   console.log(isEven(20));

//practise qn4
let length=4;
function callback(){
  console.log(this.length);
}
const object={
  length:5,
  method(callback){
    callback();
  },
};
object.method(callback,1,2);