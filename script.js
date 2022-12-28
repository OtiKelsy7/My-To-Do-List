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
      <li>${inputField.value}
       <div class='iconDiv'>
        <button class="edit" onclick="edit()">
         <i class="fa fa-pencil-square-o"></i>
        </button>
        <button class="delete" onclick="del()">
         <i class="fa fa-trash-o"></i>
        </button>
       </div>
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
function del(e) {
    e.closest("list-cont").remove()
}

