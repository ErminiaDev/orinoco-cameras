console.log(localStorage);
const selectedCard = localStorage.getItem('clickedCard');
console.log(selectedCard);

let rowDiv = document.getElementById("row");

let colDiv = document.createElement("div");
colDiv.classList.add("col-4", "mx-auto", "del");
rowDiv.appendChild(colDiv);

colDiv.innerHTML = selectedCard;

let card = document.querySelector(".card");

let cardId = card.id;

console.log(cardId);

//retrieving info with camera's id?
//looping through the different objects in the API to match ID?