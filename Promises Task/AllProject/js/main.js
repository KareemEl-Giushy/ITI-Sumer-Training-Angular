class Task {
    constructor(name, date, status) {
      this.name = name;
      this.date = date;
      this.status = status;
      this.evaluation = "placeholder";
    }
    
    updateTask(status) {
      this.status = status;
    }
}
  
class ToDoList {
    constructor() {
        this.tList = [];
    }

    addTask(task) {
        this.tList.append(task);
    }

    show() {
        console.log(this.tList);
    }

    sortByEvaluation(a, b) {
        return b.evaluation - a.evaluation;
    }

    evaluateDay(date, evalValue) {
        for (let todo of this.tList) {
            if (todo.date === date) {
                todo.evaluation = evalValue;
            }
        }
        this.tList.sort(this.sortByEvaluation);
    }
}


