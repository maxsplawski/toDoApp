const form = document.querySelector(".form");
const taskInput = document.querySelector(".form__input-task");
const categoryInput = document.querySelector(".form__input-category");
const taskList = document.querySelector(".task__list");
const description = document.querySelector(".description");
const filter = document.querySelector(".form__filter-tasks");
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
    <div class="task__container--top">
      <div class="task__date">${day} ${month} ${year}</div>
      <div class="task__content">
        <input class="task__content-el blank" type="text" readonly="readonly" value="${convertedTask}">
      </div>
      <input class="task__categories blank" type="text" readonly="readonly" value="${convertedCategories}"></input>
    </div>
    <div class="task__container--bottom"
      <div class="task__btns-container">
        <button class="task__btn-done btn">Done</button>
        <button class="task__btn-delete btn">Delete</button>
      </div>
    </div>
  `;

  taskArr.push(convertedTask);

  taskContainerEl = document.createElement("div");
  taskContainerEl.classList.add("task");

  convertedCategories.forEach((category) => {
    filterOption = document.createElement("option");
    filterOption.textContent = category;
    filterOption.value = category;

    filter.appendChild(filterOption);
  });

  taskContainerEl.insertAdjacentHTML("afterbegin", html);

  taskList.appendChild(taskContainerEl);

  taskInput.value = "";
  categoryInput.value = "";

  taskList.addEventListener("click", (e) => {
    const target = e.target;
    const task = target.closest(".task");
    const input = target.closest(".task").querySelector("input");

    if (target.classList[0] === "task__btn-done") {
      task.style.animation = "doneAnimation 1.3s";
      task.addEventListener("animationend", () => {
        task.remove();
      });
    }

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

  filter.addEventListener("click", (e) => {
    tasks = taskList.childNodes;
    console.log(tasks);
  });

  taskArr.length === 1
    ? (description.textContent = `You have 1 pending task.`)
    : (description.textContent = `You have ${taskArr.length} pending tasks.`);
};

form.addEventListener("submit", renderTask);
