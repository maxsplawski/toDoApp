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

  taskArr.push(convertedTask);
  console.log(convertedTask);

  taskContainerEl = document.createElement("div");
  taskContainerEl.classList.add("task");

  taskContentEl = document.createElement("div");
  taskContentEl.classList.add("task__content");

  taskDateEl = document.createElement("div");
  taskDateEl.classList.add("task__date");
  taskDateEl.textContent = `${day} ${month} ${year}`;

  taskEl = document.createElement("input");
  taskEl.classList.add("task__content-el");
  taskEl.classList.add("blank");
  taskEl.type = "text";
  taskEl.value = convertedTask;
  taskEl.setAttribute("readonly", "readonly");

  taskBtnsContainer = document.createElement("div");
  taskBtnsContainer.classList.add("task__btns-container");

  taskBtnEdit = document.createElement("button");
  taskBtnEdit.classList.add("task__btn-edit");
  taskBtnEdit.textContent = "Edit";

  taskBtnDelete = document.createElement("button");
  taskBtnDelete.classList = "task__btn-delete";
  taskBtnDelete.textContent = "Delete";

  taskList.appendChild(taskContainerEl);

  taskContainerEl.appendChild(taskDateEl);
  taskContainerEl.appendChild(taskContentEl);
  taskContentEl.appendChild(taskEl);

  taskContainerEl.appendChild(taskBtnsContainer);
  taskBtnsContainer.appendChild(taskBtnEdit);
  taskBtnsContainer.appendChild(taskBtnDelete);

  taskInput.value = "";

  taskBtnEdit.addEventListener("click", () => {
    if (taskBtnEdit.textContent === "Edit") {
      taskBtnEdit.textContent = "Save";
      taskEl.removeAttribute("readonly");
      taskEl.focus();
    } else {
      taskBtnEdit.textContent = "Edit";
      taskEl.setAttribute("readonly", "readonly");
    }
  });

  taskBtnDelete.addEventListener("click", () => {
    taskList.removeChild(taskContainerEl);
  });
};

form.addEventListener("submit", renderTask);
