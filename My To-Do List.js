//initial references
const listItem = document.getElementById("list-cont");
const inputField = document.getElementById("input-field");
const addBtn  = document.getElementById("btn");

//button event listener
addBtn.addEventListener("click", () => {
    listItem.innerHTML += `
     <li>${inputField.value}</li>
     <hr/>
    `

    inputField.value = "";
})
