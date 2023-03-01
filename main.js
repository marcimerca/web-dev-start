let addButton = document.getElementById("add-button") 
addButton.addEventListener("click",addToDoItem) // click = tipo di evento. Quando ascolta click, esegue la funzione
function addToDoItem(){
   const itemText = textInput.value
   newToDoItem(itemText,false)
   console.log(`"${itemText}" was added to the list.`)
} 

let clearButton = document.getElementById("clear-completed-button")
clearButton.addEventListener("click",clearList)
function clearList (){
    console.log('List cleared!')
}

let emptyButton = document.getElementById("empty-button")
emptyButton.addEventListener("click",emptyList)
function emptyList (){
    console.log("List emptied!")
}


let saveListButton = document.getElementById("save-button")
saveListButton.addEventListener("click",saveList)
function saveList (){
    console.log('List saved!')
}

let textInput = document.getElementById("textbox")
let toDoList = document.getElementById("to-do-list")

function newToDoItem(itemText, completed) {
    let toDoItem = document.createElement("li") //creates an li element to use as your new list item
    let toDoText = document.createTextNode(itemText)
    toDoItem.appendChild(toDoText)
    
     if (completed) {
        toDoItem.classList.add("completed")
}
toDoList.appendChild(toDoItem);

}
//toDoItem.addEventListener("dblclick", toggleToDoItemState);