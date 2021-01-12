//IMPORTANT comment the code to explain what it does

let cameraId = localStorage.getItem('cameraId');
let selectedLense = localStorage.getItem('selectedLense')

console.log(cameraId, selectedLense);
//FIXME not getting the right lense option, always the first one comes up (value=0).


camerasUrl = `http://localhost:3000/api/cameras/${cameraId}`;

let cameras;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", camerasUrl, true);

  xhr.onload = function (){
    // console.log(this.status);
    //FIXMEpromises instead of callbacks

    if (this.status == 200) {
        
      var cameras = JSON.parse(this.responseText);

      selectedCam.textContent = cameras.name;
      console.log(selectedCam.textContent);

      camLense.textContent = `${cameras.lenses[selectedLense]}`;
      console.log(selectedLense);

      camPrice.textContent = cameras.price+ "€";//FIXME add commas to convert the number from cents to €
      console.log(camPrice.textContent);

    }

  };

  xhr.send();


 /************ DISPLAYING FORM ON VALIDATION ****************/

  validationBtn.addEventListener('click', function(){
    form.style.display = "block";
    form.style.visibility = "visible";
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
console.log(submitBtn);

submitBtn.addEventListener('click', function(){
  let contactObj = {};
  let clientFirstNameValue = document.getElementById("clientFirstName").value;
  let clientLastNameValue = document.getElementById("clientLastName").value;
  let clientEmailValue = document.getElementById("clientEmail").value;
  let clientNumberValue= document.getElementById("clientNumber").value;
  let clientRoadValue = document.getElementById("clientRoad").value;
  let clientRoadNumberValue = document.getElementById("clientRoadNumber").value;
  let clientPCValue = document.getElementById("clientPC").value;
  contactObj.clientFirstName = clientFirstNameValue;
  contactObj.clientLastName = clientLastNameValue;
  contactObj.clientEmail = clientEmailValue;
  contactObj.clientNumber = clientNumberValue;
  contactObj.clientRoad = clientRoadValue;
  contactObj.clientRoadNumber = clientRoadNumberValue;
  contactObj.clientPC = clientPCValue;
  localStorage.setItem('contactObject', JSON.stringify(contactObj));
  localStorage.setItem('cameraId', cameraId);
})


