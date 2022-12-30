//initial references
const inputField = document.getElementById("input-field");
const addBtn = document.getElementById("btn");
const ulEl = document.getElementById("list-cont");


//functionalities
//add button eventListener
addBtn.addEventListener("click", () => {

     //This is a more better approach, no need for alert
     if (inputField.value != '') {
      //Creating a new list item
      ulEl.innerHTML += `
      <li class='list-item'>
      <textarea disabled id='input-area'>${inputField.value}</textarea>
       <div class='iconDiv'>
        <button class="edit">
         <i class="fas fa-pen-square"></i>
        </button>
        <button class="delete">
         <i class="fas fa-trash"></i>
        </button>
       </div>
      </li>
      <hr>
      `

      //Calling the edit and delete function
      edit();
      del();

      //clearing the input field
      inputField.value = "";
     }
      
 
});




//edit button function
function edit() {
  //Selecting all the edit buttons
  let edit = document.querySelectorAll('.edit');

  //Looping through all the edit buttons and assign each of them a click event
  for (let i of edit) {
    //Grab each element individually
    i.addEventListener('click', ()=> {
      //Get the input element for editing
      let field = i.closest('li').querySelector('textarea');
      //Check if it's current state is editing or not
      if(field.hasAttribute('disabled')) {
        //Edit the input
        field.removeAttribute('disabled');
        i.querySelector('i').classList.replace("fa-pen-square","fa-check-square");
        field.focus();
      }else{
        //Close the editing
        i.querySelector('i').classList.replace("fa-check-square","fa-pen-square");
        field.setAttribute('disabled', '');
      }
    });
  }
  
}

//Deleting tasks
function del() {
  //Selecting all the delete buttons
  let del = document.querySelectorAll('.delete');
  
  //Looping through all the delete buttons and assign each of them a click event
  for (let i of del) {
        //Grab each element individually
        i.addEventListener('click', ()=>{
          //Delete the task
          i.closest('li').remove();
        });
      }
}
