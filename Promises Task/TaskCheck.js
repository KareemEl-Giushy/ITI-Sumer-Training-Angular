const task = {
  taskId: 123,
  description: "Sample task",
  status: "in progress",
};

let isTaskDone = new Promise((resolve) => {
    // setTimeout(() => {
      resolve(task.status === "done");
    // }, 2000);
  });


function check() {
    isTaskDone.then((isDone) => {
        if (isDone) {
          console.log("Good Job");
        } else {
          console.log("This task not done");
          setTimeout(check, 10000); 
        }
      }).catch((error) => {
        console.error("Error occurred while checking task status:", error);
      });
}


check();