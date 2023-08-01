
function isNotEmpty(element) {

    let errMsgs = element.parentNode.getElementsByClassName("error");
    
    if(element.value == ""){
        for(let k of errMsgs)
            k.hidden = false;
        return false;
    } else {
        for(let k of errMsgs)
            k.hidden = true;
        return true;
    }
}

function createTaskRow(todoList) {
    const table = document.querySelector("table tbody");
    table.innerHTML = "";
    for(let j = 0; j < todoList.length; j++){
        let todo = todoList[j];

        const ul = document.createElement("ul");
        
        for(let i = 0; i < todo.tasklist.length; i++){
            todo.tasklist[i].id = `task${j}-${i}`;
            const li = document.createElement("li");
            const label = document.createElement("label");
            label.setAttribute("for", `task${j}-${i}`);
            label.innerText = todo.tasklist[i].name;

            li.appendChild(Object.assign(document.createElement("input"), {
                type: "checkbox",
                id: `task${j}-${i}`
            }));
            
            li.appendChild(label);
            
            ul.appendChild(li);
        }

        const rowTemplate = `
        <td>${todo.date}</td>
        <td>
        ${ul.outerHTML}
        </td>
        <td>
        <input type="range" min="0" max="100" value="${todo.evaluation}" kdate="${todo.date}">
        </td>`;
        
        const tr = document.createElement("tr");
        tr.innerHTML = rowTemplate;
        
        table.appendChild(tr);
    }
}

function findTask(todoLists, id) {
    
    let found = null;
    todoLists.forEach((l) => {
        for(let task of l.tasklist) {
            if(task.id == id){
                found = task;
                return;
            }
        }
    });

    return found;
}

export {
    isNotEmpty,
    createTaskRow,
    findTask
};