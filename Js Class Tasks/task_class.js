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
  evaluation="Incomplete";
  constructor(date, tasks) {
    this.date = date;
    this.tasks = tasks;
  }
}

function addTask(taskName, date) {
  return new Task(taskName, date, "Incomplete");
  
}

function buildToDoList(date, tasks) {
  let todoList = [];
  const evaluation = "Incomplete";
  let listItem = new ToDoList(date, evaluation, tasks);
  todoList= listItem;
  return todoList;
}

let toDoLists=[];

let tasks=[
  addTask("pray", "26-7-23"),
  addTask("eat", "27-7-23"),
  addTask("sleep", "27-7-23")
]
let todos =[
  buildToDoList("26-7-23", tasks),
  buildToDoList("27-7-23", tasks),
  buildToDoList("28-7-23",tasks)
]

function evaluateDay(date, evalValue) {
  for (let todo of todos) {
    if (todo.date === date) {
      todo.evaluation=evalValue;
    }
  }
  todos.sort(sortByEvaluation);
}

function sortByEvaluation(a, b) {
  return b.evaluation - a.evaluation;
}


evaluateDay("26-7-23" , 10);
evaluateDay("27-7-23" , 11);
evaluateDay("28-7-23" , 12);

 


console.log(todos);