//IMPORTANT comment the code to explain what it does

camerasUrl = "http://localhost:3000/api/cameras";

let cameras;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", camerasUrl, true);

  xhr.onload = function (){
    // console.log(this.status);
    //TODO TEST STATUS
    if (this.status == 200) {
      var cameras = JSON.parse(this.responseText);
      for (var i in cameras) {
        //TODO TEST ALL CAMERAS
        

        let rowDiv = document.getElementById("row");

        let colDiv = document.createElement("div");
        colDiv.classList.add("col-4", "del");//FIXME delete .del classes everywhere
        rowDiv.appendChild(colDiv);

        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "bg-light", "mb-3", "del");
        // cardDiv.id = cameras[i]._id;
        colDiv.appendChild(cardDiv);

        let cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header", "del");//FIXME add an h2 for the camera's name
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
        cardPrice.innerHTML = cameras[i].price + ' €'; //FIXME add commas to convert the number from cents to €
        cardBody.appendChild(cardPrice);

        let cardBtn = document.createElement("a");
        cardBtn.classList.add("btn", "btn" + (Number([i])+1), "btn-success", "my-3");
        cardBtn.id =  cameras[i]._id;
        cardBtn.href = 'product.html';
        cardBtn.innerHTML = "Voir les détails";
        cardBody.appendChild(cardBtn); 
        
      }

      let allBtns = document.querySelectorAll(".btn");
      //TODO TEST BTN ARRAY
      console.log(allBtns);

      allBtns.forEach(function(button){
        button.addEventListener('click', function(){
          let cameraId = button.id;
          localStorage.setItem('cameraId', cameraId);
        })
      })


    }
  };

  xhr.send();



