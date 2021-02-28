/**************** displaying objects on first page by creating html elements ****************/

function displayObjects(){
  
  for (var i in cameras) {
    
    let rowDiv = document.getElementById("row");
    let colDiv = document.createElement("div");
    colDiv.classList.add("col-lg-4");
    colDiv.classList.add("col-md-6");
    colDiv.classList.add("col-sm-12");
    rowDiv.appendChild(colDiv);

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "bg-light", "mb-3");
    // cardDiv.id = cameras[i]._id;
    colDiv.appendChild(cardDiv);

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header", "del");
    cardHeader.innerHTML = cameras[i].name;
    cardDiv.appendChild(cardHeader);

    let cardImage = document.createElement("div");
    cardImage.style.width = "100%";
    cardImage.style.height = "250px";
    cardImage.style.backgroundRepeat = "no-repeat";
    cardImage.style.backgroundPosition = "center";
    cardImage.style.backgroundSize = "cover";
    cardImage.style.backgroundImage = "url(" +cameras[i].imageUrl + ")";
    cardDiv.appendChild(cardImage);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "text-center");
    cardDiv.appendChild(cardBody);

    let cardPrice = document.createElement("div");
    cardPrice.classList.add("card-text", "lead");
    let camPrice = cameras[i].price/100
    cardPrice.innerHTML =  camPrice + ' €';
    cardBody.appendChild(cardPrice);

    let cardBtn = document.createElement("a");
    cardBtn.classList.add("btn", "btn" + (Number([i])+1), "btn-success", "my-3");
    cardBtn.id =  cameras[i]._id;
    cardBtn.href = 'product.html';
    cardBtn.innerHTML = "Voir les détails";
    cardBody.appendChild(cardBtn); 
    
  }
}

/***************** storing the camera the user selects in localStorage ********************/

 function StoreSelectedCam(){
  let allBtns = document.querySelectorAll(".btn");
  allBtns.forEach(function(button){
    button.addEventListener('click', function(){
      let cameraId = button.id;
      localStorage.setItem('cameraId', cameraId);
    })
  })
}


/******************************* getting cameras from API *****************************/

camerasUrl = "http://localhost:3000/api/cameras";

let cameras;

function loadData(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", camerasUrl, true);
  xhr.onload = function (){

    if (this.status == 200) {
      cameras = JSON.parse(this.responseText);
      
      promise
        .then(displayObjects, returnErrorHTML)
        .then(StoreSelectedCam, returnErrorStore)
      ;    
    }
  };
  xhr.send();
}

/*************************promises***************************/

function returnError(){
  alert('Une erreur s\'est produite dans le chargement des données depuis le serveur');
};

function returnErrorHTML(){
  alert('Une erreur s\'est produite dans le chargement des données de la caméra');
};

function returnErrorStore(){
    alert('Une erreur s\'est produite dans lors du choix de la caméra');
  };

const promise = new Promise((resolve,reject) => {
      resolve();
      reject();
  });

promise
  .then(loadData, returnError)
;   

