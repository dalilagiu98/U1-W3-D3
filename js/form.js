//riguardo il form togliamo le azioni di default:
const pageForm = document.getElementById("task-form");
pageForm.addEventListener("submit", function (e) {
  e.preventDefault();

  //recupero i valori del form:
  const valueForm = document.getElementById("task-input");

  //creo div vuoto
  const listSection = document.createElement("div");
  listSection.innerHTML = `<ul>
  <li>${valueForm.value} <button class='hide-button'>HIDE</button> </li>
  </ul>
  `;

  //lo appendo nell'html:
  const taskList = document.getElementById("list");
  taskList.appendChild(listSection);

  //svuotiamo l'input dopo aver fatto il submit:
  valueForm.value = "";

  //aggiungo funzione per cui al click, l'elemento viene depennato:
  listSection.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      event.target.style.textDecoration = "line-through";
    }
  });

  //aggiungo funzione per cui al click del bottone, l'elemento viene nascosto:
  listSection.addEventListener("click", function (event) {
    if (event.target.classList.contains("hide-button")) {
      const listItem = event.target.parentNode; //richiama l'elemento padre
      listItem.style.display = "none";
    }
  });
});
