let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textArea = document.getElementById("textArea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
let data = [];

let formValidation = () => {
  if (textInput?.value === "") {
    console.log("failure");

    if (msg != undefined) {
      msg.innerHTML = "Task cannot be blank";
    }
  } else {
    console.log("success");

    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();

    if (msg != undefined) {
      msg.innerHTML = "";
    }
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textArea.value,
  });

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
};
