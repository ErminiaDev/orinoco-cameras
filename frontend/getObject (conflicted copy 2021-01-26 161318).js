//IMPORTANT comment the code to explain what it does

console.log(localStorage);

/******************get the camera's id from local storage*******************/

const cameraId = localStorage.getItem('cameraId');




//TODO TEST that an ID is recieved on this page
camerasUrl = `http://localhost:3000/api/cameras/${cameraId}`;

let cameras;



function loadData()
{
  var xhr = new XMLHttpRequest();
  xhr.open("GET", camerasUrl, true);

  xhr.onload = function ()
  {
    // console.log(this.status);
    //FIXME promises instead of callbacks
    //TODO TEST the status
    if (this.status == 200) 
    {
      cameras = JSON.parse(this.responseText);

      let cartBtn = document.querySelector(".btn");

      /* let cameraId = cameras._id;
      console.log(cameraId);
       */
      let allLenses = cameras.lenses;

      let lenseSelectList = document.getElementById("select_lense");

      function populateHTML()
      {
        cam_title.innerHTML = cameras.name;

        cam_photo.style.backgroundImage = "url(" +cameras.imageUrl + ")";
          
        cam_description.innerHTML = cameras.description;

        let camPrice = cameras.price/100

        cam_price.innerHTML = camPrice + "€";
      }

      function createOptions()
      {

        for(i=0; i < allLenses.length; i++){ 
          let lenseOption = document.createElement("option");
          lenseSelectList.appendChild(lenseOption);
          lenseOption.innerHTML += allLenses[i];
          lenseOption.setAttribute('value',`${[i]}`);
          // console.log(lense_selectList);
        }
      };


      function StoreSelOption()
      {
        //TODO test that the following function stores a lense value
        lenseSelectList.addEventListener('click', function(){
          let selectedLense = lenseSelectList.options[lenseSelectList.selectedIndex]
          let lenseArray = [];
          lenseArray = JSON.parse(localStorage.getItem('lenseArray')) || [];
          lenseArray.push(selectedLense.value);
          localStorage.setItem('lenseArray', JSON.stringify(lenseArray));
          if(selectedLense.value == ""){
            cartBtn.disabled = true;
            alert('Merci de choisir une lentille');
          } else {
            cartBtn.disabled = false;
          }
        })   
      };


      function addToCart(){
        cartBtn.addEventListener('click', function(){      
            //FIXME stores only current camera in array       
            let camArray = [];
            camArray = JSON.parse(localStorage.getItem('camArray')) || [];
            camArray.push(cameraId);
            localStorage.setItem('camArray', JSON.stringify(camArray)) ;
            modalWindow.style.display = "block";
            modalWindow.style.visibility = "visible";
         });
      }

      
      promise
      .then(populateHTML, returnErrorHTML)
      .then(createOptions, returnErrorOptions)
      .then(StoreSelOption, returnErrorSelOpt)
      .then(addToCart, returnErrorCart)
      ;    
    }
      
  };

  xhr.send();
}

/*************************promises***************************/

function returnErrorHTML(){
    alert('Une erreur s\'est produite dans le chargement des données de la caméra');
  };

function returnErrorOptions(){
  alert('Une erreur s\'est produite dans le chargement des options de lentilles');
};

function returnErrorSelOpt(){
  alert('Une erreur s\'est produite lors du choix de la lentille');
};

function returnErrorCart(){
  alert('Une erreur s\'est produite lors de l\'ajout du produit au panier');
};

function returnError(){
  alert('Une erreur s\'est produite lors du chargement des données depuis le serveur');
};

const promise = new Promise((resolve,reject) => {
      resolve();
      reject();
  });

promise
  .then(loadData, returnError)
;   

  