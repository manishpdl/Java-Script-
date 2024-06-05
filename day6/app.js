// const student={
//     name:"Manish",
//     age:21,
//     marks:79
// };
// console.log(student);

// const items={
// price:1000,
// discount:50,
// color:["red","yellow"]

// };
// console.log(items);

//thread/twitter post
// const post={
// username:"@manish",
// content:"photo",
// likes:100,
// repost:50,
// tags:['google','apple','samsung']

// };
// console.log(post);
// //Accessing value using key
// console.log(post["username"]);//obj_name["key"];
// console.log(post.likes);//objname.key (more easy)
// console.log(post.tags[2]);

//
// const student_info=
// {First_Name:"manish",
//  Last_Name:"Poudel",
// };
// console.log(student_info);

// console.log(student_info.age=20);
// console.log(student_info.address="kathmandu");
// student_info.address="chitwan";//updating address
// student_info.hobbies=['cricket','swimming','travelling']; // adding hobbies
// console.log(student_info);
// console.log(student_info.hobbies[1]);//accessing hobbies
// console.log("another method");
// console.log(student_info["hobbies"][2]);//another method of accessing
// student_info["hobbies"][2]="reading";//another method of updating
// delete student_info.hobbies[2];//deleting
// delete student_info.hobbies;

//nested objects

// const backbenchers={
//  manish:{
//     marks:100,
//     age:20
//  },
//  asim:{
//     marks:90,
//     age:19
//  },
//  arvin:{
//     marks:80,
//     age:22
//  }
// };
// console.log(backbenchers);
// console.log(backbenchers["asim"]['age']);
// console.log(backbenchers.manish);
// console.log(backbenchers.arvin.marks=100);

//array of objects

// const classinfo=[
// {name:"Manish",
//     grade:"A+"
// },
// {
//     name:"Anish",
//     grade:"A"
// },
// {
//     name:"nish",
//     grade:"B"
// }
// ];
// console.log(classinfo);
// console.log(classinfo[1].name);
// console.log(classinfo[2].grade="C");//update
// classinfo[1].address="chitwan";//adding
// delete classinfo[2].address;

//Math objects
// let num=20.901;
// console.log(Math.abs(num));
// console.log(`floor value ${Math.floor(num)}`);//roundoff the number which is nearest,smallest
// console.log(Math.ceil(num));//round of to large value
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.pow(2,2));
// console.log(`random value ${Math.random()}`)

//Random Integer:it generate between 0 to 1(1 is not generated )

// let step1=Math.random();
// let step2=step1*10//multiply for its range (in this case we want to generate upto 1 to 10 to we uses *10)
// let step3=Math.floor(step2);
// console.log(step3);
//step4=step3+1(becauss the number was generated upto 0 to 9 only so we need 10 also)

//  console.log(Math.floor(Math.random()*10) );

//creating a random number between 1 to 100.
// console.log(Math.floor(Math.random()*100+1));

// creating a random number between 1 and 5.

// console.log(Math.floor(Math.random()*5+1));

//guessing game
// const num = prompt("Enter the maximum number");

// let guess = prompt(`Please enter a number between 1 and ${num}`);

// let random = Math.floor(Math.random() * num) + 1;
// while (true) {
//   if (parseInt(guess) === random) {
//     console.log("Your guess is right! Congratulations");
//     break;
//   } else if (guess === "quit") {
//     console.log("Quited");
//     break;
//   } else if (parseInt(guess) < 1 || parseInt(guess) > num) {
//     console.log("Your number is outside the range");
//     guess = prompt(`Please enter a number between 1 and ${num}`);
//   } else if (parseInt(guess) > random) {
//     console.log("You entered a larger number");
//     guess = prompt(`Please enter a number lower than ${guess}`);
//   } else if (parseInt(guess) < random) {
//     console.log("You entered a smaller number");
//     guess = prompt(`Please enter a number larger than ${guess}`);
//   } else {
//     console.log("Try again");
//     guess = prompt(`Please enter a number between 1 and ${num}`);
//   }
// }

// console.log("The correct number was:", random);

// Create a program that generates a random number representing a dice roll.
//  [The number should be between 1 and 6

// -->>>>>>  let dice=Math.floor(Math.random()*6)+1;
//         console.log(dice);

// Create an object representing a car that stores the following properties for the
//  car: name, model, color.
//  Print the car’s name.

// ->

// const car={
//     name:'audi',
//     model:1990,
//     color:'white'
// };
// console.log(car.name);

// Create an object Person with their name, age and city.
//  Edit their city’s original value to change it to “New York”.
//  Add a new property country and set it to the United States

// const Person = {
//   name: "Manish",
//   age: 20,
//   city: "chitwan",
// };
// console.log(Person);
// console.log(Person.city="New York");
// console.log(Person);
// console.log(Person["country"]="United States");
// console.log(Person["phonenumber"]=9812345222);
// console.log(Person);
// console.log(delete Person["phonenumber"]);
// console.log(Person);
