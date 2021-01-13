let contactObjStr = localStorage.getItem('contactObject');
console.log(contactObjStr);
let cameraArrStr = localStorage.getItem('cameraArray');
console.log(cameraArrStr);
let contactObj = JSON.parse(contactObjStr);
let cameraArr = JSON.parse(cameraArrStr);

let finalObj = {};
finalObj.contact = contactObj;
finalObj.products = cameraArr;
console.log(finalObj);

camerasUrl = `http://localhost:3000/api/cameras/order`;

var xhr = new XMLHttpRequest();

xhr.open("POST", camerasUrl, true);

xhr.onload = function () {
  
  if (this.status == 201) {
    var order = JSON.parse(this.responseText);
    console.log(order);
    console.log(this.status);
  } else {
    console.log(this.status);
  }
};

xhr.setRequestHeader("Content-type", "application/json");
xhr.send(JSON.stringify(finalObj));



