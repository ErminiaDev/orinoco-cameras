/* *************GETTING AND PARSING LOCAL STORAGE INFO***************** */

let camArray = JSON.parse(localStorage.getItem('camArray')) ;

/************************REMOVING DUPLICATES FROM CAMARRAY FOR CART DISPLAY*************************/
let arrResult = {};

for (i = 0; i < camArray.length; i++) {
  let item = camArray[i];
  arrResult[item.cam_id + " - " + item.cam_option] = item;
};

let j = 0;
let nonDuplicatedArray = [];
for (var item in arrResult) {
  nonDuplicatedArray[j++] = arrResult[item];
};


/* ********************************DISPLAYING CART************************** */

function displayCart(){

  for (i = 0; i < nonDuplicatedArray.length; i++){
    let cartBody = document.getElementById("cartBody");
    let cartRow = document.createElement("tr");

    cartBody.appendChild(cartRow);

    let cartCol1 = document.createElement("td");
    let cartCol2 = document.createElement("td");
    let cartCol3 = document.createElement("td");
    let cartCol4 = document.createElement("td");

    cartRow.appendChild(cartCol1);
    cartRow.appendChild(cartCol2);
    cartRow.appendChild(cartCol3);
    cartRow.appendChild(cartCol4);

    let camPrice = nonDuplicatedArray[i].cam_price/100

    cartCol1.textContent = nonDuplicatedArray[i].cam_name;
    cartCol2.textContent = nonDuplicatedArray[i].cam_option;
    cartCol3.textContent = nonDuplicatedArray[i].cam_amount;
    cartCol4.textContent = camPrice + "€";
  }

}

/************************ CALCULATING AND DISPLAYING TOTAL****************************/

let total = function calcTotal() {
  let camPricesArr = [];
  for(i=0; i<camArray.length; i++) {
    camPricesArr.push(camArray[i].cam_price/100);
  }
  let totalAmount = camPricesArr.reduce((total, current) => total + current, 0);
  return totalAmount;
}();

localStorage.setItem('total', total);

function displayTotal() {
  let lastCartRow = document.createElement("tfoot");
  lastCartRow.id = "tfooter";
  let table = document.getElementById("table");
  table.appendChild(lastCartRow);
  let tfootCol1 = document.createElement("td");
  tfootCol1.setAttribute("colspan", 3);
  tfootCol1.textContent = "Total";
  let tfootCol2 = document.createElement("td");
  tfootCol2.textContent = total + "€"
  lastCartRow.appendChild(tfootCol1);
  lastCartRow.appendChild(tfootCol2);
  displayCart();
}

displayTotal();


/********************** CLEARING CART BUTTON (RED BUTTON)***************************/ 

  clearBtn.addEventListener('click', function(){
    cartBody.remove();
    localStorage.clear();
    clearBtn.style.display = "none";
    validationBtn.style.display = "none";
    returnBtn.style.display = "block";
    clearBtn.style.visibility = "hidden";
    validationBtn.style.visibility = "hidden";
    returnBtn.style.visibility = "visible";
    tfooter.remove();
  })


/************ DISPLAYING FORM ON VALIDATION AND STORING CAMERA ARRAY IN LOCAL STORAGE (GREEN BUTTON) ****************/

  validationBtn.addEventListener('click', function(){
    form.style.display = "block";
    form.style.visibility = "visible";

    camArrStr = JSON.stringify(camArray)
    localStorage.setItem('camArray', camArrStr);
  });



/******************* FORM VALIDATION ************************/

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission(see bootstrap doc)
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})();

/******************** CREATE FORM INFORMATION OBJECT ************************/

let submitBtn = document.getElementById("submitBtn");

function createClientObj() {
  submitBtn.addEventListener('click', function(){
  
    let clientFirstNameValue = document.getElementById("clientFirstName").value;
    let clientLastNameValue = document.getElementById("clientLastName").value;
    let clientEmailValue = document.getElementById("clientEmail").value;
    let clientAddressValue = document.getElementById("clientAddress").value;
    let clientCityValue = document.getElementById("clientCity").value;
    let contactObj = {
      firstName: clientFirstNameValue,
      lastName: clientLastNameValue,
      address: clientAddressValue,
      city: clientCityValue,
      email: clientEmailValue
    };
  localStorage.setItem('contactObject', JSON.stringify(contactObj));
  })
}

createClientObj();



