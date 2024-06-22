// //selecting element by class
// let checking = document.getElementsByClassName("firstid");
// // document.getElementsByClassName("firstid")[0];

// // selecting element by id
// for (let i = 0; i < checking.length; i++) {
//   checking[i].innerText = "Manish";
//   console.log(checking[i]);
// }

// let paragraph = document.getElementById("para");
// paragraph.innerText = "Welcome";
// console.log(paragraph);

// //selecting element by tag
// let allpara = document.getElementsByTagName("p");
// console.log(allpara);

// for (let i = 0; i < allpara.length; i++) {
//   allpara[i].innerText = "Checking Elements by Tags";
//   console.dir(allpara[i]);
// }
// //selecting element by queryselectors

// console.log("query selectors");
// let querysel=document.querySelector('.firstid');
// console.log(querysel);
// querysel.innerHTML='Welcome';


// console.dir(document.querySelector("div.navbar #name").innerText='Back');
// console.dir(document.querySelectorAll('h1'));

// //setting objects(innerhtml,textcontent and inntertext)
// //inner text only shows the content which is not hidden
// //textcontent it also shows the invisible or hide content
// //inner html: its shows all the content like if we have used any tag inside then it will be visible

// let innerpara=document.querySelector('.paragraph')
// console.dir(innerpara);

// let update='Hlo Its Me,Manish PoudelFront-end enthusiast mastering HTML,CSS,and JavaScript';
// innerpara.innerText=(`${update}`);


// //Manipulating attributes
// let selimg=document.querySelector('img');
// console.log(selimg);
// selimg.getAttribute('selimg');
// selimg.setAttribute('src','https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp');
// console.dir(selimg.getAttribute("class"));
// selimg.setAttribute('class','images');
// console.dir(selimg.getAttribute('class'));

// //Manipulating style
// let selimgs=document.querySelector('img');
//  selimgs.style.border='2px solid red' ;

//  //ClassList Property
//  let styling=document.querySelector('h2');
//  console.log(styling);
// //checking the classLIst
// let sty=styling.classList;
// console.log(sty);
// //Adding the class 
// styling.classList.add('green')

// //deleting
// styling.classList.remove('firstid');
// console.log(sty);
// //replace
// styling.classList.replace('green','red');
// console.log(sty);
// //adding class
// styling.classList.add('yellow');

// //contains for checking whelther the given class exists or not
// console.log(styling.classList.contains("red"));//true
// console.log(styling.classList.contains("black"));//true


// //toggle(its like not i.e if there the class exists it will remvoe , if not add)
// let tog=document.querySelector('p');
// console.dir(tog);
// tog.classList.toggle('green');//it has added the green class to the paragraph tag
// tog.classList.toggle('red');//it is adding red class
// tog.classList.toggle('red');//it is removing red class because it already exist


//navigation
// let unlist=document.querySelector('ul');
// console.log(unlist);

// console.log(unlist.parentElement);
// console.log(unlist.childElementCount);
// let footlist=document.querySelector('.footer');
// console.log(footlist.children);
// console.log(footlist.childElementCount);

// console.log(footlist.children[1].nextElementSibling);
// console.log(footlist.children[1].previousElementSibling);


//Adding Elements
// let body=document.querySelector('body')
// let last=document.createElement('p');
// last.innerText=("Adding elements from JS")
// console.log(last);
// last.style.color='red';
// // body.appendChild(last);
// unlist.appendChild(last); //append child
// last.append(' this text is added using obj.append(element)')
 
// let btn=document.createElement('button');
// btn.innerText='Click Me';
// unlist.appendChild(btn);
  
// // let inputty=document.createElement('input');
// // inputty.placeholder='Enter your name';
// // unlist.appendChild(inputty);
  

// //append
// last.append(btn) // we can also directly append the obj
// last.append('dont click') // we can also directly append the obj
  

// //prepend
// let photo=document.createElement('img')
// photo.src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-1/400384486_1797015567422314_302379388456637814_n.jpg?stp=cp6_dst-jpg_p160x160&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xKjhEiBt3WUQ7kNvgF199K3&_nc_ht=scontent.fktm3-1.fna&oh=00_AYDDYA07HHkH4-EG7g1awGoVrdu0JblwFM4_nc9HLIk3Dw&oe=667B74D3";  
// body.prepend(photo);
 

//insertadjacent elements

// let footerclass=document.querySelector('.footer')
// console.dir(footerclass);
// let txt=document.createElement('textarea')
// txt.placeholder=("enter here");
// // footerclass.insertAdjacentElement('beforebegin',txt);
// // footerclass.insertAdjacentElement("afterbegin",txt);
// // footerclass.insertAdjacentElement("beforeend",txt);
// footerclass.insertAdjacentElement("afterend",txt);





//practise  qS
let selbody=document.querySelector("body");
let selfoot = document.querySelector(".footer"); 
let addpara = document.createElement("p");

//qn1
addpara.innerText = "Hey I'm red!";
addpara.style.color = "red";
document.querySelector(".footer").append(addpara);

//qn2
let addheading = document.createElement("h3");
addheading.innerText = "I a, blue h3";
selfoot.appendChild(addheading);
addheading.style.cssText = `
    background-color: blue;
    color: white;
    padding: 10px;
    border: 1px solid black;
`;

//qn3
let crdiv = document.createElement("div");
let h1=document.createElement("h1");
let para1=document.createElement("p");

h1.innerText="I'm in a Div";
para1.innerText="Me too";
crdiv.append(h1);
crdiv.append(para1);
crdiv.classList.add("box");


selbody.prepend(crdiv);
