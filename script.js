//alert("hello I'm working")

let form = document.querySelector("#todo-form");
let list = document.querySelector("#todo-list");


form.addEventListener("submit", function (e) {
 //alert("form working");

 let task = document.querySelector("#task").value;
 let worker = document.querySelector("#worker").value;
 let date = document.querySelector("#date").value;
 addTaskToList(task, worker, date);
 clearFields();
 e.preventDefault();
});


function addTaskToList(a, b, c) {
 if (a === "" || b === "" || c === "") {
   showAlert("Please Fill in All boxes", "error");
 } else {
   let row = document.createElement("tr");
   row.innerHTML = `<td>${a}</td>
  <td>${b}</td><td>${c}</td>   
  <td><a href="#" class="delete">Delete</a></td>`;
   list.appendChild(row);
   showAlert("New task added", "success");
 }
}


function clearFields() {
 document.querySelector("#task").value = "";
 document.querySelector("#worker").value = ""; 
 document.querySelector("#date").value = ""; 
}


function showAlert(message, className) {
 let div = document.createElement("div");
 let container = document.querySelector(".container");
 div.innerText = message;
 div.className = className;
 div.id = "box";
 container.insertBefore(div, form);

 setTimeout(function () {
   document.querySelector("#box").remove();
   document.querySelector("task", "worker", "date").remove();
 }, 3000);
}


document.querySelector("#todo-list").addEventListener("click", function (e) {
 deleteTask(e.target);
 e.preventDefault();
});


function deleteTask(elemtToDelete) {
 if (elemtToDelete.className === "delete") {
   elemtToDelete.parentElement.parentElement.remove();
   showAlert("Task Completed - task removed", "success");
 } else {
  showAlert("Don't clicked There ", "error");
 }
}












