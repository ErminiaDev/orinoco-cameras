teddyBtn = document.getElementById("btn1");
furnitureBtn = document.getElementById("btn2");
camerasBtn = document.getElementById("btn3");

teddiesUrl = "http://localhost:3000/api/teddies";
furnitureUrl = "http://localhost:3000/api/furniture";
camerasUrl = "http://localhost:3000/api/cameras";

let teddies;
let furniture;
let cameras;

teddyBtn.addEventListener("click", function()
{deleteObjects(),
    getObjects(teddiesUrl, teddies);})

furnitureBtn.addEventListener("click", function()
{deleteObjects(),
getObjects(furnitureUrl, furniture)});

camerasBtn.addEventListener("click", function()
{deleteObjects(),
    getObjects(camerasUrl, cameras)});

function deleteObjects() {

  var oldCards = document.getElementsByClassName('del');
  while(oldCards.length > 0){
      oldCards[0].parentNode.removeChild(oldCards[0]);
  }
}

function getObjects(url, objects) {

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  console.log(url);

  xhr.onload = function (objects) {
    if (this.status == 200) {
      var objects = JSON.parse(this.responseText);
      for (var i in objects) {
        let rowDiv = document.getElementById("row");

        let colDiv = document.createElement("div");
        colDiv.classList.add("col-4", "del");
        rowDiv.appendChild(colDiv);

        let cardDiv = document.createElement("div");
        cardDiv.style.width = "350px";
        cardDiv.style.height = "400px";
        cardDiv.classList.add("card", "bg-light", "mb-3", "del");
        colDiv.appendChild(cardDiv);

        let cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header", "del");
        cardHeader.innerHTML = objects[i].name;
        cardDiv.appendChild(cardHeader);

        let cardImage = document.createElement("div");
        cardImage.style.width = '100%';
        cardImage.style.height = '100%';
        cardImage.style.backgroundRepeat = "no-repeat";
        cardImage.style.backgroundPosition = "center";
        cardImage.style.backgroundSize = "cover";
        cardImage.style.backgroundImage = "url(" +objects[i].imageUrl + ")";
        cardDiv.appendChild(cardImage);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "del");
        cardDiv.appendChild(cardBody);

        let cardPrice = document.createElement("div");
        cardPrice.classList.add("card-text", "del");
        cardPrice.innerHTML = objects[i].price + ' €';
        cardBody.appendChild(cardPrice);

        let cardDesc = document.createElement("div");
        cardDesc.classList.add("card-text", "del");
        cardBody.appendChild(cardDesc);
      }
    }
  };

  console.log(objects);
  xhr.send();
}
