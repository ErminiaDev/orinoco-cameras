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
    //FIXME ne pas oublier les promises au lieu des callbacks
    if (this.status == 200) {
      var cameras = JSON.parse(this.responseText);

      selectedCam.textContent = cameras.name;
      console.log(selectedCam.textContent);

      camLense.textContent = `${cameras.lenses[selectedLense]}`;
      console.log(selectedLense);

      camPrice.textContent = cameras.price+ "€";
      console.log(camPrice.textContent);

    }

  };

  xhr.send();