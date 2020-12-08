camerasUrl = "http://localhost:3000/api/cameras/order";

let cameras;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", camerasUrl, true);

  xhr.onload = function (){
    // console.log(this.status);
    if (this.status == 200) {
      var cameras = JSON.parse(this.responseText);
      for (var i in cameras) {

      }
    }
  };

  xhr.send();
