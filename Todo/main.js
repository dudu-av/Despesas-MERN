"use strict";
let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textArea = document.getElementById("textArea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
let data = [];
let formValidation = () => {
    if ((textInput === null || textInput === void 0 ? void 0 : textInput.value) === "") {
        console.log("failure");
        if (msg != undefined) {
            msg.innerHTML = "Task cannot be blank";
        }
    }
    else {
        console.log("success");
        acceptData();
        add === null || add === void 0 ? void 0 : add.setAttribute("data-bs-dismiss", "modal");
        add === null || add === void 0 ? void 0 : add.click();
        (() => {
            add === null || add === void 0 ? void 0 : add.setAttribute("data-bs-dismiss", "");
        })();
        if (msg != undefined) {
            msg.innerHTML = "";
        }
    }
};
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
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
        data.map((elem, index) => {
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
let editTask = (e) => {
    var _a;
    let selectedTask = (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textArea.value = selectedTask.children[2].innerHTML;
    deleteTask(e);
};
let deleteTask = (e) => {
    var _a, _b, _c, _d;
    (_b = (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
    data.splice(parseInt((_d = (_c = e.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.id), 1);
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
};
(() => {
    var _a;
    data = JSON.parse((_a = localStorage.getItem("data")) !== null && _a !== void 0 ? _a : "") || [];
    console.log(data);
    createTask();
})();
