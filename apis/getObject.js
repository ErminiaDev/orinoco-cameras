console.log(localStorage);
const selectedCard = localStorage.getItem('clickedCard');
console.log(selectedCard);

let rowDiv = document.getElementById("row");

let colDiv = document.createElement("div");
colDiv.classList.add("col-4", "del");
rowDiv.appendChild(colDiv);

rowDiv.innerHTML = selectedCard;