const form = document.getElementById("todo-form");
const toDoInput = document.getElementById("todo");
const submitBtn = document.querySelector(".btn-submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});
