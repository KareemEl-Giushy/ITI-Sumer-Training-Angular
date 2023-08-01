let tasks = []
class Task {
    constructor(name, date, status) {
      this.name = name;
      this.date = date;
      this.status = status;
    }
    
    updateTask(status) {
      this.status = status;
    }
}

class ToDoList {
  date;
  evaluation="placeholder";
  constructor(date, tasks) {
    this.date = date;
    this.tasks = tasks;
  }
}

function addTask(taskName, date) {
  tasks.push(new Task(taskName, date, "Incomplete"));
  tasks.sort((a, b) => a.date - b.date);
  
}

addTask("pray", new Date(2023, 7, 26)),
addTask("eat", new Date(2023, 7, 27)),
addTask("sleep", new Date(2023, 7, 28))
console.log(tasks);

function buildToDoList(date, tasks) {
  let todoList = [];
  const evaluation = "Incomplete";
  let listItem = new ToDoList(date, evaluation, tasks);
  todoList= listItem;
  return todoList;
}

let toDoLists=[];

let todos =[
  buildToDoList("26-7-23", tasks),
  buildToDoList("27-7-23", tasks),
  buildToDoList("28-7-23",tasks)
]

function evaluateDay(date, evalValue, sortf) {
  for (let todo of todos) {
    if (todo.date === date) {
      todo.evaluation=evalValue;
    }
  }

  sortf()
  
}

function sortByEvaluation() {
  // sort
  todos.sort((a, b) => b.evaluation - a.evaluation);
}


evaluateDay("26-7-23" , 10, sortByEvaluation);
evaluateDay("27-7-23" , 11, sortByEvaluation);
evaluateDay("28-7-23" , 12, sortByEvaluation);

 


console.log(todos);