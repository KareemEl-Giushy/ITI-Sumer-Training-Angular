class Task {
    constructor(name, date, status = "incomplete") {
        this.id = null;
        this.name = name;
        this.date = date;
        this.status = status;
    }
    
    updateTask(status) {
        this.status = status;
    }
}

// class TaskList {
//     constructor() {
//         this.tList = [];
//     }

//     addTask(task) {
//         this.tList.push(task);
//     }

//     show() {
//         console.log(this.tList);
//     }
// }

class ToDoList {
    constructor(date, list) {
        this.date = date;
        this.tasklist = list;
        this.evaluation = 0;
    }
}

export {
    Task,
    ToDoList
};
