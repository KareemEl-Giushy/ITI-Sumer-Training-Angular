import { Task, ToDoList } from './classes.js';
import * as util from './utils.js';

let todoLists = [];
//? ========= Pre-Define A List =========
(function preDefineData() {

   let tasklist = [
      new Task("Kareem", "2023-09-12", "incomplete"),
      new Task("Ahmed", "2023-09-12", "incomplete"),
      new Task("Aziz", "2023-10-12", "incomplete"),
      new Task("Youssef", "2023-09-12", "incomplete"),
      new Task("Bassant", "2023-10-12", "incomplete"),
      new Task("Nada", "2023-10-12", "incomplete")
   ]

   for (let t of tasklist) {
      let enteredFlag = false;
      todoLists.forEach((l) => {
         if (l.date == t.date) {
            l.tasklist.push(t);
            enteredFlag = true;
            // console.log(l);
         }
      });

      if (!enteredFlag) {
         let todo = new ToDoList(t.date, [t]);
         todoLists.push(todo);
      }
   }

})();

util.createTaskRow(todoLists);
//? [END]==== Pre-Define A List =========

let btn = document.querySelector(".input-form button");
let taskName = document.getElementById("taskName");
let dueDate = document.getElementById("dueDate");
buildRanges();
changeCheckboxes();

btn.onclick = (e) => {
   // e.preventDefault();
   console.log("clicked");

   let tn = util.isNotEmpty(taskName); // Task Name Validation
   let dd = util.isNotEmpty(dueDate); // Due Date Validation
   if (tn && dd) {
      let t = new Task(taskName.value, dueDate.value, "incomplete");

      let enteredFlag = false;
      todoLists.forEach((e) => {
         if (e.date == dueDate.value) {
            e.tasklist.push(t);
            enteredFlag = true;
         }
      });

      if (!enteredFlag) {
         let todo = new ToDoList(dueDate.value, [t]);
         todoLists.push(todo);
      }

   }

   util.createTaskRow(todoLists);
   buildRanges();
   changeCheckboxes();

   console.log(todoLists);
};


function evaluateDay(date, evalValue, sortf) {
   for (let todo of todoLists) {
      if (todo.date === date) {
         todo.evaluation = evalValue;
      }
   }

   sortf();
}

function sortByEvaluation() {
   // sort
   todoLists.sort((a, b) => b.evaluation - a.evaluation);
}

function buildRanges() {
   let range = document.querySelectorAll("input[type='range']");
   range.forEach(element => {

      if (parseInt(element.value) > 50) {
         element.style.backgroundColor = "green";

      } else if (element.value == 50) {
         element.style.backgroundColor = "silver";

      } else if (element.value < 50) {
         element.style.backgroundColor = "red";

      }

      element.oninput = () => {
         // console.log(element.value)
         evaluateDay(element.getAttribute("kdate"), element.value, sortByEvaluation);
         console.log(todoLists);
         if (parseInt(element.value) > 50) {
            element.style.backgroundColor = "green";

         } else if (element.value == 50) {
            element.style.backgroundColor = "silver";

         } else if (element.value < 50) {
            element.style.backgroundColor = "red";

         }
      }
   });
}

function changeCheckboxes() {
   let checks = document.querySelectorAll("input[type='checkbox']");
   checks.forEach((e) => {
      e.onchange = () => {
         // console.log(e.id);
         let task = util.findTask(todoLists, e.id);
         if(task != null) {
            task.updateTask(task.status == "complete" ? "incomplete": "complete");
            console.log(task);
         }else {
            console.log("Error Finding The Task");
         }
      }
   });
}