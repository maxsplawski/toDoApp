const form = document.querySelector(".form");
const taskInput = document.querySelector(".form__input-task");
const categoryInput = document.querySelector(".form__input-category");
const taskList = document.querySelector(".task__list");
let taskArr = [];

const renderTask = (e) => {
  e.preventDefault();
  const task = taskInput.value;
  const convertedTask = task[0].toUpperCase() + task.slice(1);

  const categoryInputValue = categoryInput.value;
  const categories = categoryInputValue.split(" ");
  const convertedCategories = categories.map((category) => {
    return " " + category[0].toUpperCase() + category.slice(1);
  });
  console.log(convertedCategories);

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
    <div>${convertedCategories}</div>
    <div class="task__btns-container">
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
  categoryInput.value = "";

  taskList.addEventListener("click", (e) => {
    const target = e.target;
    const task = target.closest(".task");
    const input = target.closest(".task").querySelector("input");

    if (target.classList[0] === "task__btn-delete") {
      task.classList.add("delete");
      task.addEventListener("transitionend", () => {
        task.remove();
      });
    }

    if (target.classList[0] === "task__content-el") {
      input.removeAttribute("readonly");

      input.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
          input.setAttribute("readonly", "readonly");
          input.blur();
        }
      });
    }
  });
};

form.addEventListener("submit", renderTask);
