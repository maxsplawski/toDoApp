const form = document.querySelector(".form");
const toDoInput = document.querySelector(".form__input");
const toDoBtn = document.querySelector(".btn-submit");
const toDoList = document.querySelector(".todo__list");

let toDosArr = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  data.forEach((toDo) => {
    toDosArr.push(toDo);
  });
  console.log(toDosArr);
});

const renderToDos = (toDos = ["fesfs"]) => {
  toDoList.innerHTML = "";

  toDos.forEach((toDo) => {
    const html = `<div>${toDo}</div>`;

    toDoList.insertAdjacentHTML("afterbegin", html);
  });
};

renderToDos();
