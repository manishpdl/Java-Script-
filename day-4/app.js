//for loop
// for(let i=1;i<6;i++)
//     {
//         console.log(i);
//     }

//odd number
// for(i=1;i<=10;i=i+2)
//     {
//         console.log(i)
//     }

// let i=1;
// while(i<=10)
//     {
//         console.log(i);
//         i++;
//     }

//favourite movie
// const favmovie="3idiot";
// let guess=prompt("guess my favourite movie" );
// while(guess!=favmovie)
//     {

//         guess=prompt(" Please Try Again!" );

//     }
// if(guess==favmovie);
// console.log("you guessed");
// else
// {
//     console.log("see you again");
// }

// //let number = 3;
// let guess = parseInt(prompt("Guess the number between 1 and 10"));

// while (guess !== number && guess !== 'quit') {
//     if (guess > number) {
//         guess = parseInt(prompt("Too high! Guess the number again or enter 'quit' to quit"));
//     } else {
//         guess = parseInt(prompt("Too low! Guess the number again or enter 'quit' to quit"));
//     }
// }

// if (guess === number) {
//     console.log("Congratulations! You guessed it!");
// } else {
//     console.log(`Quitting the game. The secret number was ${number}.`);
// }

//break

// let i=1;
// while(i<5)
//     {
//         if(i==3){break;}
//         console.log(i);
//         i++;
//     }
//     console.log("we used break at 3")

//loops in array

// let fruits=["mango","apple","banana","litchi","orange"];

// for(let i=0;i<fruits.length();i++)
//     {
//         console.log(i,fruits[i]);
//     }

// let fruits=["mango","apple","banana","litchi","orange"];

// for(let i=fruits.length-1;i>=0;i--)
//     {
//         console.log(i,fruits[i]);
//     }

//let heroes = [['manish', 'salman', 'amir'], [20, 21, 22]];

// for (let i = 0; i < heroes.length; i++) {
//     for (let j = 0; j < heroes[i].length; j++) {
//         console.log(heroes[i][j]);
//     }
// }

// let students = [
//   ["Alice", "Bob", "Charlie"],
//   [85, 90, 95],
// ];

// for (let i = 0; i < students[0].length; i++) {
//   console.log(`info of student ${students[0][i]} and ${students[1][i]}`);
// }


//for of loop for(element of collection)

// let fruits=["mango","apple","banana","litchi","oranage"];
// for(fruit of fruits)
//     {
//         console.log(fruit);
   
//     }


//nested for of loop
// let heroes = [['manish', 'salman', 'amir'], [20, 21, 22]];
// for(list of heroes){
//     console.log(list);
//     for (data of list)
//         {
//             console.log(data);
//         }
// }
