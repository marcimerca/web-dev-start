let addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem); // click = tipo di evento. Quando ascolta click, esegue la funzione
function addToDoItem() {
  if (textInput.value !== "") {
    const itemText = textInput.value;
    newToDoItem(itemText, false);
    console.log(`"${itemText}" was added to the list.`);
  }
}

textbox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add-button").click();
  }
});

let clearButton = document.getElementById("clear-completed-button");
clearButton.addEventListener("click", clearList);
function clearList() {
  let completedItems = toDoList.getElementsByClassName("completed");

  while (completedItems.length > 0) {
    completedItems.item(0).remove();
  }
}
let emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", emptyList);
function emptyList() {
  toDoItems = toDoList.children;
  while (toDoItems.length > 0) {
    toDoItems.item(0).remove();
  }
}

let saveListButton = document.getElementById("save-button");
saveListButton.addEventListener("click", saveList);

function saveList() {
  const toDos = [];
  for (let i = 0; i < toDoList.children.length; i++) {
    const toDo = toDoList.children.item(i);

    const toDoInfo = {
      task: toDo.innerText,
      completed: toDo.classList.contains("completed"),
    };
    toDos.push(toDoInfo);
  }
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

const textInput = document.getElementById("textbox");
const toDoList = document.getElementById("to-do-list");

function newToDoItem(itemText, completed) {
  let toDoItem = document.createElement("li"); //creates an li element to use as your new list item
  let toDoText = document.createTextNode(itemText);
  toDoItem.appendChild(toDoText);

  if (completed) {
    toDoItem.classList.add("completed");
  }
  toDoList.appendChild(toDoItem);
  toDoItem.addEventListener("dblclick", toggleToDoItemState);

  function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
      this.classList.remove("completed");
    } else {
      this.classList.add("completed");
    }
  }
}

const toDoInfo = {
  task: "Thing I need to do",
  completed: false,
};

function loadList() {
  if (localStorage.getItem("toDos") != null) {
    const toDos = JSON.parse(localStorage.getItem("toDos"));

    for (let i = 0; i < toDos.length; i++) {
      const toDo = toDos[i];
      newToDoItem(toDo.task, toDo.completed);
    }
  }
}

loadList();
