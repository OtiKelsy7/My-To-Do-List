//initial reference
const inputEl = document.querySelector("#input-field");
const addButton = document.querySelector("#btn");
const display = document.querySelector("#display-div");
const ulEl = document.querySelector("#ul-el");

//adding event listeners to othe add button
addButton.addEventListener("click", () => {
    ulEl.innerHTML += `
      <li>${inputEl.value}</li>
      <i class="fa" aria-hidden="true">&#xf044;</i>
    `
    inputEl.value = "";
})