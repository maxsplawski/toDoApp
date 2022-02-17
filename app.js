const form = document.querySelector(".form");
const taskInput = document.querySelector(".form__input");
const taskList = document.querySelector(".task__list");
let taskArr = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = taskInput.value;
  taskArr.push(task);
  console.log(taskArr);

  taskEl = document.createElement("div");
  taskEl.textContent = task;
  taskList.appendChild(taskEl);
});

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
