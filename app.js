const form = document.querySelector(".form");
const taskInput = document.querySelector(".form__input-task");
const taskList = document.querySelector(".task__list");
let taskArr = [];

const renderTask = (e) => {
  e.preventDefault();
  const task = taskInput.value;
  const convertedTask = task[0].toUpperCase() + task.slice(1);

  const time = new Date();
  const year = time.getFullYear();
  const month = time.toLocaleString("en-GB", {
    month: "long",
  });
  const day = time.getDate();

  const html = `
    <div class="task__date">${day} ${month} ${year}</div>
    <div class="task__content">
      <input class="task__content-el blank" type="text" readonly="readonly" value="${convertedTask}">
    </div>
    <div class="task__btns-container">
      <button class="task__btn-edit btn">Edit</button>
      <button class="task__btn-delete btn">Delete</button>
    </div>
  `;

  taskArr.push(convertedTask);
  console.log(convertedTask);

  taskContainerEl = document.createElement("div");
  taskContainerEl.classList.add("task");

  taskContainerEl.insertAdjacentHTML("afterbegin", html);

  taskList.appendChild(taskContainerEl);

  taskInput.value = "";

  taskList.addEventListener("click", (e) => {
    const target = e.target;
    const task = target.closest(".task");

    if (target.classList[0] === "task__btn-delete") {
      task.classList.add("delete");
      task.addEventListener("transitionend", () => {
        task.remove();
      });
    }

    // const editBtn = target.closest(".task").querySelector(".task__btn-edit");
    // const input = target.closest(".task").querySelector("input");
    // console.log(target);
    // console.log(editBtn);
    // if (
    //   target.classList[0] === "task__btn-edit" &&
    //   editBtn.textContent === "Edit"
    // ) {
    //   target.textContent = "Save";
    //   input.removeAttribute("readonly");
    //   input.focus();
    // }
    // if (
    //   target.classList[0] === "task__btn-edit" &&
    //   editBtn.textContent === "Save"
    // ) {
    //   target.textContent = "Edit";
    //   input.setAttribute("readonly", "readonly");
    // }
  });
};

form.addEventListener("submit", renderTask);
