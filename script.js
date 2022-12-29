//initial references
const inputField = document.getElementById("input-field");
const addBtn = document.getElementById("btn");
const ulEl = document.getElementById("list-cont");

//functionalities
//add button eventListener
addBtn.addEventListener("click", () => {
  /*
    if(!inputField.value) {
       alert("please add a task")
    } else {
      ulEl.innerHTML += `
      <li>${inputField.value}
       <div class='iconDiv'>
        <button class="edit" onclick="edit()">
         <i class="fas fa-pen-square"></i>
        </button>
        <button class="delete" onclick="del()">
         <i class="fas fa-trash"></i>
        </button>
       </div>
      </li>
      `
      */

     //This is a more better approach, no need for alert
     if (inputField.value != '') {
      ulEl.innerHTML += `
      <li>${inputField.value}
       <div class='iconDiv'>
        <button class="edit" onclick="edit()">
         <i class="fas fa-pen-square"></i>
        </button>
        <button class="delete" onclick="del()">
         <i class="fas fa-trash"></i>
        </button>
       </div>
      </li>
      <hr>
      `
      
      //clearing the input field
      inputField.value = "";
     }
      
 
});

//edit button function
function edit() {

}

//delete button function
function del(e) {
    e.closest("list-cont").remove()
}

