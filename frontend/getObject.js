/******************get the camera's id from local storage*******************/

const cameraId = localStorage.getItem("cameraId");

//TODO TEST that an ID is recieved on this page
camerasUrl = `http://localhost:5000/api/cameras/${cameraId}`;

let cameras;

//displaying the selected camera's information
function populateHTML(object) {
  cam_title.innerHTML = object.name;

  cam_photo.style.backgroundImage = "url(" + object.imageUrl + ")";

  cam_description.innerHTML = object.description;

  let camPrice = object.price / 100;

  cam_price.innerHTML = camPrice + "€";
}

//displaying the selected camera's options
function createOptions(optionArray, list) {
  for (i = 0; i < optionArray.length; i++) {
    let lenseOption = document.createElement("option");
    list.appendChild(lenseOption);
    lenseOption.innerHTML += optionArray[i];
    lenseOption.setAttribute("value", `${[i]}`);
  }
}

//store selected option inside the camera object and enable add to cart button when option is selected
function StoreSelOption(list, btn, selObject) {
  list.addEventListener("click", function () {
    let selectedLense = list.options[list.selectedIndex];
    selObject.cam_option = selectedLense.text;
    if (selectedLense.value == "") {
      btn.disabled = true;
      alert("Merci de choisir une lentille");
    } else {
      btn.disabled = false;
    }
  });
}

//storing the camera object in local storage as long as its id and options are not undefined, and open modal
function addToCart(btn, selObject) {
  btn.addEventListener("click", function () {
    let camArray = [];
    camArray = JSON.parse(localStorage.getItem("camArray")) || [];
    if (selObject.cam_id != undefined && selObject.cam_option != undefined) {
      checkLengthArr(selObject, camArray);
      camArray.push(selObject);
      localStorage.setItem("camArray", JSON.stringify(camArray));
    } else {
      alert = "Pas de caméra ajoutée au panier";
    }
    modalWindow.style.display = "block";
    modalWindow.style.visibility = "visible";
  });
}

//checking if camArray's length is more than 0 (first camera being added)
function checkLengthArr(currentItem, array) {
  if (array.length === 0) {
    currentItem.cam_amount = 1;
  } else {
    checkIdenticalCams(currentItem, array);
  }
}

//if more than one camera in the array, check if they are identical
function checkIdenticalCams(currentItem, array) {
  for (i = 0; i < array.length; i++) {
    if (
      currentItem.cam_id === array[i].cam_id &&
      currentItem.cam_option === array[i].cam_option
    ) {
      array[i].cam_amount += 1;
      currentItem.cam_amount = array[i].cam_amount;
    } else {
      currentItem.cam_amount = 1;
    }
  }
}

//calling API to get info based on the clicked camera's id
function loadData() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", camerasUrl, true);

  xhr.onload = function () {

    if (this.status == 200) {
      cameras = JSON.parse(this.responseText);

      let camObject = {};

      camObject = {
        cam_id: cameraId,
        cam_name: cameras.name,
        cam_option: undefined,
        cam_price: cameras.price,
        cam_amount: 0
      };

      let cartBtn = document.querySelector(".btn");

      let allLenses = cameras.lenses;

      let lenseSelectList = document.getElementById("select_lense");

      promise
        .then(populateHTML(cameras), returnErrorHTML)
        .then(createOptions(allLenses, lenseSelectList), returnErrorOptions)
        .then(
          StoreSelOption(lenseSelectList, cartBtn, camObject),
          returnErrorSelOpt
        )
        .then(addToCart(cartBtn, camObject), returnErrorCart);
    }
  };

  xhr.send();
}

/*************************promises***************************/

function returnErrorHTML() {
  alert(
    "Une erreur s'est produite dans le chargement des données de la caméra"
  );
}

function returnErrorOptions() {
  alert(
    "Une erreur s'est produite dans le chargement des options de lentilles"
  );
}

function returnErrorSelOpt() {
  alert("Une erreur s'est produite lors du choix de la lentille");
}

function returnErrorCart() {
  alert("Une erreur s'est produite lors de l'ajout du produit au panier");
}

function returnError() {
  alert(
    "Une erreur s'est produite lors du chargement des données depuis le serveur"
  );
}

const promise = new Promise((resolve, reject) => {
  resolve();
  reject();
});

promise.then(loadData, returnError);
