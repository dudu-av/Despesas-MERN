type Data = {
  text: string;
  date: string;
  description: string;
};

let form = document.getElementById("form");
let textInput = <HTMLInputElement>document.getElementById("textInput");
let dateInput = <HTMLInputElement>document.getElementById("dateInput");
let textArea = <HTMLInputElement>document.getElementById("textArea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
let data: Data[] = [];

let formValidation = (): void => {
  if (textInput?.value === "") {
    console.log("failure");

    if (msg != undefined) {
      msg.innerHTML = "Task cannot be blank";
    }
  } else {
    console.log("success");

    acceptData();
    add?.setAttribute("data-bs-dismiss", "modal");
    add?.click();

    (() => {
      add?.setAttribute("data-bs-dismiss", "");
    })();

    if (msg != undefined) {
      msg.innerHTML = "";
    }
  }
};

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let acceptData = (): void => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textArea.value,
  });

  localStorage.setItem("data", JSON.stringify(data));
  createTask();
};

let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textArea.value = "";
};

let createTask = () => {
  if (tasks) {
    tasks.innerHTML = "";

    data.map((elem: Data, index: number) => {
      if (tasks) {
        return (tasks.innerHTML += `
                    <div id=${index}>
                        <span class="fw-bold">${elem.text}</span>
                        <p>${elem.description}</p>
                        <span class="options">
                            <i onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
                            <i onClick="deleteTask(this);createTask()" class="fas fa-trash-alt"></i>
                        </span>
                    </div>
                `);
      }
    });
  }

  resetForm();
};

let editTask = (e: HTMLElement): void => {
  let selectedTask: HTMLElement = e.parentElement?.parentElement!;

  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textArea.value = selectedTask.children[2].innerHTML;

  deleteTask(e);
};

let deleteTask = (e: HTMLElement): void => {
  e.parentElement?.parentElement?.remove();

  data.splice(parseInt(e.parentElement?.parentElement?.id!), 1);

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
};

(() => {
  data = JSON.parse(localStorage.getItem("data") ?? "") || [];
  console.log(data);
  createTask();
})();
