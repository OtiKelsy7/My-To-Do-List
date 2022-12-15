//initial references
const inputField = document.getElementById("input-field");
const addBtn = document.getElementById("btn");
const ulEl = document.getElementById("list-cont");

//functionalities
//add button eventListener
addBtn.addEventListener("click", () => {
    if(!inputField.value) {
       alert("please add a task")
    } else {
      ulEl.innerHTML += `
      <li>${inputField.value}<button class="edit" onclick="edit()">edit</button><button class="delete" onclick="del(this)">delete</button>
      </li>
      `
 
      //clearing the input field
      inputField.value = "";
    }
})

//edit button function
function edit() {

}

//delete button function
function del(item) {
    item.closest("list-cont").remove()
}