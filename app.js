const form = document.querySelector(".form");
const taskInput = document.querySelector(".form__input-task");
const dateInput = document.querySelector("form__input-date");
const cancelBtn = document.querySelector(".btn-reset");
const taskList = document.querySelector(".task__list");
let taskArr = [];

const renderTask = (e) => {
  e.preventDefault();
  const task = taskInput.value;
  const convertedTask = task[0].toUpperCase() + task.slice(1);

  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth();
  const day = time.getDate();

  taskArr.push(convertedTask);
  console.log(convertedTask);

  taskContainerEl = document.createElement("div");
  taskContainerEl.classList.add("task");

  taskContentEl = document.createElement("div");
  taskContentEl.classList.add("task__content");

  taskDateElContainer = document.createElement("div");
  taskDateElContainer.classList.add("task__date-container");

  taksDateYearEl = document.createElement("p");
  taksDateYearEl.classList.add("task_date-year");
  taksDateYearEl.textContent = year;

  taksDateMonthEl = document.createElement("p");
  taksDateMonthEl.classList.add("task_date-month");
  taksDateMonthEl.textContent = month;

  taksDateDayEl = document.createElement("p");
  taksDateDayEl.classList.add("task_date-day");
  taksDateDayEl.textContent = day;

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

  taskContainerEl.appendChild(taskDateElContainer);
  taskDateElContainer.appendChild(taksDateYearEl);
  taskDateElContainer.appendChild(taksMonthYearEl);
  taskDateElContainer.appendChild(taksDayYearEl);

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
