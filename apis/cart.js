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
  //FIXME do this event listener and visibility of form hidden
  validationBtn.addEventListener('click', function(){
    form.style.display = "block";
    form.style.visibility = "visible";
  })