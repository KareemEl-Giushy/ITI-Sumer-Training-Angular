// Global array to store tasks
const tasksArray = [];

function addTask(task, date) {
  const taskObject = {
    taskId: tasksArray.length + 1,
    task: task,
    date: date,
    checked: false
  };
  tasksArray.push(taskObject);
}

function checkTask(isChecked, taskId, date) {
  for (const task of tasksArray) {
    if (task.taskId === taskId && task.date === date) {
      task.checked = isChecked;
      return;
    }
  }
}

// Example usage:
addTask('eat', '12-12-2023');
addTask('study', '15-12-2023');

console.log(tasksArray);

checkTask(true, 1, '12-12-2023');

console.log(tasksArray); 