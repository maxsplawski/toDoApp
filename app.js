const form = document.querySelector(".form");
const taskInput = document.querySelector(".form__input");
const taskList = document.querySelector(".task__list");
let taskArr = [];

const renderTask = (e) => {
  e.preventDefault();
  const task = taskInput.value;
  const convertedTask = task[0].toUpperCase() + task.slice(1);
  taskArr.push(convertedTask);
  console.log(convertedTask);

  taskElContainer = document.createElement("div");
  taskElContainer.classList.add("task");

  taskEl = document.createElement("div");
  taskEl.classList.add("task__content");
  taskEl.textContent = convertedTask;

  taskBtnDelete = document.createElement("button");
  taskBtnDelete.classList = "task__btn-delete";
  taskBtnDelete.textContent = "Delete";

  taskList.appendChild(taskElContainer);

  taskElContainer.appendChild(taskEl);

  taskElContainer.appendChild(taskBtnDelete);

  taskInput.value = "";
};

form.addEventListener("submit", renderTask);

// let toDosArr = [];

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const data = new FormData(form);
//   data.forEach((toDo) => {
//     toDosArr.push(toDo);
//   });
//   console.log(toDosArr);
// });

// const renderToDos = (toDos = ["fesfs"]) => {
//   toDoList.innerHTML = "";

//   toDos.forEach((toDo) => {
//     const html = `<div>${toDo}</div>`;

//     toDoList.insertAdjacentHTML("afterbegin", html);
//   });
// };

// renderToDos();
