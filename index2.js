const todoList = [

 
];

function renderToDo() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoobject = todoList[i];
    // const name = todoobject.name;
    // const dueDate  = todoobject.dueDate;
    const { name, dueDate } = todoobject;
    const html = `
    <p>
      ${name}  ${dueDate} 
      <button id="delete" onclick="
      todoList.splice(${i}, 1);
      renderToDo();"
      >Delete</button>
      </p>
      `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML; // corrected the property name to 'innerHTML'
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");

  const dueDate = dateInputElement.value;

  todoList.push({
    name: name,
    dueDate: dueDate,
  });
  console.log(todoList);

  inputElement.value = "";

  renderToDo();
}
