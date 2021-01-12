let contactObj = JSON.parse(localStorage.getItem('contactObject'));
console.log(contactObj);
let cameraId = localStorage.getItem('cameraId');
console.log(cameraId);

orderNum = Math.floor(100000 + Math.random() * 900000);
console.log(orderNum);

camerasUrl = `http://localhost:3000/api/cameras/order`;

const contactString = JSON.stringify(contactObj);

var xhr = new XMLHttpRequest();


xhr.onload = function () {
  // console.log(this.status);
  if (this.status == 200) {
    var order = JSON.parse(this.responseText);
    console.log(order);
  }
};

xhr.open("POST", camerasUrl, true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.send(contactString, cameraId);

//FIXME look at camera.js


