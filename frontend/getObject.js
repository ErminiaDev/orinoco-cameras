//IMPORTANT comment the code to explain what it does

console.log(localStorage);
const cameraId = localStorage.getItem('cameraId');

//FIXME clickedBtnId is still stored when in cart.js, is there need to localStorage a cameraID again?

//TODO TEST that an ID is recieved on this page
camerasUrl = `http://localhost:3000/api/cameras/${cameraId}`;



  var xhr = new XMLHttpRequest();
  xhr.open("GET", camerasUrl, true);

  xhr.onload = function (){
    // console.log(this.status);
    //FIXME promises instead of callbacks
    //TODO TEST the status
    let cameras = JSON.parse(xhr.responseText);

    function populateHTML(){
      cam_title.innerHTML = cameras.name;

      cam_photo.style.backgroundImage = "url(" +cameras.imageUrl + ")";
          
      cam_description.innerHTML = cameras.description;

      cam_price.innerHTML = cameras.price + "€";//FIXME add commas to convert the number from cents to €
    }

    let cartBtn = document.querySelector(".btn");

    let cameraId = cameras._id;
    console.log(cameraId);

    let allLenses = cameras.lenses;

    let lenseSelectList = document.getElementById("select_lense");

    function createOptions(){

      for(i=0; i < allLenses.length; i++){ 
        let lenseOption = document.createElement("option");
        lenseSelectList.appendChild(lenseOption);
        lenseOption.innerHTML += allLenses[i];
        lenseOption.setAttribute('value',`${[i]}`);
        // console.log(lense_selectList);
      }
    };

    function StoreSelOption(){
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
 
    function returnError(){
      alert('Une erreur s\'est produite dans le chargement des données');
    };

    const promise = new Promise((resolve,reject) => {
      if(xhr.status == 200) {
        resolve();
      }else{
        reject();
      }   
    });

    promise
      .then(populateHTML, returnError)
      .then(createOptions, returnError)
      .then(StoreSelOption, returnError)
      .then(addToCart, returnError)
  };

  xhr.send();