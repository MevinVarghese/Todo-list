function addTask() {
  var input = document.getElementById("taskInput");
  var taskText = input.value.trim();

  if (taskText !== "") {
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = taskText;

    // for deleting
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      deleteTask(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
    input.value = "";
  } else {
    alert("Please enter a task!");
  }
}

function deleteTask(element) {
  var taskList = document.getElementById("taskList");
  taskList.removeChild(element);
}
