
camerasUrl = "http://localhost:3000/api/cameras";

let cameras;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", camerasUrl, true);

  xhr.onload = function (){
    // console.log(this.status);
    if (this.status == 200) {
      var cameras = JSON.parse(this.responseText);
      for (var i in cameras) {
        let rowDiv = document.getElementById("row");

        let colDiv = document.createElement("div");
        colDiv.classList.add("col-4", "del");
        rowDiv.appendChild(colDiv);

        let cardDiv = document.createElement("div");
        // cardDiv.style.width = "350px";
        // cardDiv.style.height = "400px";
        cardDiv.classList.add("card", "bg-light", "mb-3", "del");
        cardDiv.id = "card" + (Number([i])+1);
        colDiv.appendChild(cardDiv);

        let cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header", "del");
        cardHeader.innerHTML = cameras[i].name;
        cardDiv.appendChild(cardHeader);

        let cardImage = document.createElement("div");
        cardImage.style.width = "350px";
        cardImage.style.height = "250px";
        cardImage.style.backgroundRepeat = "no-repeat";
        cardImage.style.backgroundPosition = "center";
        cardImage.style.backgroundSize = "cover";
        cardImage.style.backgroundImage = "url(" +cameras[i].imageUrl + ")";
        cardDiv.appendChild(cardImage);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "text-center", "del");
        cardDiv.appendChild(cardBody);

        let cardPrice = document.createElement("div");
        cardPrice.classList.add("card-text", "lead", "del");
        cardPrice.innerHTML = cameras[i].price + ' €';
        cardBody.appendChild(cardPrice);

        let cardSelect = document.createElement("a");
        cardSelect.classList.add("btn", "btn-dark", "my-3");
        cardSelect.id = "btn" + (Number([i])+1);
        cardSelect.href = "product.html"
        cardSelect.innerHTML = "Voir les détails";
        cardBody.appendChild(cardSelect);
        
      }
      let camera1 = document.getElementById("card1");
      let camera2 = document.getElementById("card2");
      let camera3 = document.getElementById("card3");
      let camera4 = document.getElementById("card4");
      let camera5 = document.getElementById("card5");

      /* btn1.addEventListener("click", function(){
        sessionStorage.setItem(camera1);
      }) */
      


      /* let cards = document.getElementsByClassName("card");
      console.log(cards); */

      /* for(i=0; i < cards.length; i++) {
          let cardID = [i];
          cardDiv.id = "card" + cardID;
          console.log(cardDiv.id)
      } */
    }
  };

  console.log(cameras);
  xhr.send();



