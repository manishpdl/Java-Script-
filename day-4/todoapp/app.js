let todo = [];
let req = prompt("Please enter your request");
console.log(req);

while (true) {
  if (req == "quit") {
    console.log("Quitting app");
    break;
  }

  if (req == "list") {
    console.log("-------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i + ":" + todo[i]);
    }
    console.log("-------------");
  } else if (req == "add") {
    let task = prompt("Please enter a task you want to add");
    todo.push(task);
    console.log("Task added");
  } else if (req == "delete") {
    let idx = parseInt(prompt("please enter a task index to  delete"));
    if(idx>=0 && idx<todo.length){
    console.log(todo.splice(idx, 1));
    console.log("task deleted");}
    else{
      console.log("invalid index");
    }
  } 
  else {
    console.log("wrong req");
  }
  req = prompt("Please enter your request");
}
