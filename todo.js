"use strict";

const container = document.querySelector(".container");
const writtentasks = document.querySelector(".written-tasks");
const task = document.querySelector(".task");
const start = document.querySelector(".stime");
const finish = document.querySelector(".ftime");

const err0 = document.querySelector(".error0");
const err1 = document.querySelector(".error1");
const err2 = document.querySelector(".error2");
let num = 0;
document.querySelector(".submit").addEventListener("click", function (e) {
  let correct = true;
  e.preventDefault();
  if (task.value === "") {
    correct = false;
    err0.textContent = "*please , add a task";
    err0.classList.add("error-css");
    setTimeout(() => {
      err0.textContent = "";
    }, 2000);
  }
  if (start.value === "" || finish.value === "") {
    correct = false;
    err1.textContent = "*please , add start and finish time";
    err1.classList.add("error-css");
    setTimeout(() => {
      err1.textContent = "";
    }, 2000);
  }
  if (correct) {
    const newtask = document.createElement("div");
    newtask.classList.add("task-css");
    num++;
    newtask.innerHTML = `<p>Task ${num}:</p>
    <p>${task.value}</p>
    <p>start at ${start.value}</p>
    <p>finish at ${finish.value}</p>
    `;
    writtentasks.appendChild(newtask);
  }
});
