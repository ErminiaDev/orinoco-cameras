//IMPORTANT comment the code to explain what it does

//FIXME cameraID is already in local storage, called clickedBtnId in previous js file
//TODO test that we are getting a cameraID and a selectedLense
let cameraId = localStorage.getItem('cameraId');
let selectedLense = localStorage.getItem('selectedLense');

localStorage.clear();

camerasUrl = `http://localhost:3000/api/cameras/${cameraId}`;

let cameras;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", camerasUrl, true);

  xhr.onload = function (){
    // console.log(this.status);
    //FIXMEpromises instead of callbacks
    //TODO test that status is OK
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

 /************ DISPLAYING FORM ON VALIDATION AND STORING CAMERA ARRAY IN LOCAL STORAGE ****************/

  validationBtn.addEventListener('click', function(){
    form.style.display = "block";
    form.style.visibility = "visible";

    let cameraArr = [];
    cameraArr.push(cameraId);
    console.log(cameraArr);

    cameraArrStringified = JSON.stringify(cameraArr)
    console.log(cameraArrStringified);
    localStorage.setItem('cameraArray', cameraArrStringified);
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
//console.log(submitBtn);

//TODO test that different parameters of the object are present and not null
submitBtn.addEventListener('click', function(){
  
  let clientFirstNameValue = document.getElementById("clientFirstName").value;
  let clientLastNameValue = document.getElementById("clientLastName").value;
  let clientEmailValue = document.getElementById("clientEmail").value;
  let clientAddressValue = document.getElementById("clientAddress").value;
  let clientCityValue = document.getElementById("clientCity").value;
  let contactObj = {
    clientFirstName: clientFirstNameValue,
    clientLastName: clientLastNameValue,
    clientEmail: clientEmailValue,
    clientAddress: clientAddressValue,
    clientCity: clientCityValue
  };
localStorage.setItem('contactObject', JSON.stringify(contactObj));
})


