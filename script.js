//initial references
const inputField = document.getElementById("input-field");
const addBtn = document.getElementById("btn");
const ulEl = document.getElementById("list-cont");


//functionalities
//add button eventListener
addBtn.addEventListener("click", () => {

  const task = inputField.value;
     //This is a more better approach, no need for alert
     if (!task) {
      return;
      }
        
        //clearing the input field
        const list = document.createElement('li'),
        textarea = document.createElement('textarea'),
        btn_group = document.createElement('div'),
        edit_btn = document.createElement('button'),
        del_btn = document.createElement('button'),
        edit_icon = document.createElement('i'),
        del_icon = document.createElement('i');
        
        //Setting the textarea
        textarea.setAttribute('disabled', '');
        textarea.setAttribute('id','input-area');
        textarea.value = task;

        //Setting the edit and delete icon
        edit_icon.setAttribute('class','');
        edit_icon.classList.add('fas', 'fa-pen-square');
        del_icon.setAttribute('class','');
        del_icon.classList.add('fas', 'fa-trash');
        
        //Setting the edit button
        edit_btn.setAttribute('class','edit');
        edit_btn.appendChild(edit_icon);

        //Setting the delete button
        del_btn.setAttribute('class','delete');
        del_btn.appendChild(del_icon);
        
        //Append the del and edit button to the group div and append to the list tag
        btn_group.append(edit_btn,del_btn);
        list.append(textarea,btn_group);
        
        //Add the list tag to the HTML
        ulEl.appendChild(list);
        //call the delete function on all tasks
        del();
        
      
      
        edit_btn.addEventListener('click', (e)=>{
          //Getting the input field for editing
          let field = e.target.closest('li').querySelector('textarea');

          //Check if it's current state is editing or not
          if(field.hasAttribute('disabled')) {
            //Edit the input
            field.removeAttribute('disabled');
            field.focus();
            //console.log('open edit');

            //Check if it's the button or the icon that was clicked and address both clicks
            if (e.target.innerHTML !== ''){
            e.target.querySelector('i').classList.replace("fa-pen-square","fa-check-square");
            }else{e.target.classList.replace("fa-pen-square","fa-check-square")};
          }else{
            //Close the editing
            field.setAttribute('disabled', '');
            //console.log('close edit');

            //Check for different element click
            if (e.target.innerHTML !== ''){
            e.target.querySelector('i').classList.replace("fa-check-square","fa-pen-square");
            }else{e.target.classList.replace("fa-check-square","fa-pen-square")};
          }
        }, true);

        inputField.value = "";
        

      });
    
  

//Deleting tasks
function del() {
  //Selecting all the delete buttons
  let del = document.querySelectorAll('.delete');
  
  //Looping through all the delete buttons and assign each of them a click event
  for (let i of del) {
    //Grab each element individually
    i.addEventListener('click', ()=>{
          //console.log('deleted');
          //Delete the task
          i.closest('li').remove();
        });
      }
}
