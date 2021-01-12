let contactObjStr = localStorage.getItem('contactObject');
console.log(contactObjStr);
let cameraArrStr = localStorage.getItem('cameraArray');
console.log(cameraArrStr);

camerasUrl = `http://localhost:3000/api/cameras/order`;

/* const contactString = JSON.stringify(contactObj);
const cameraString = JSON.stringify(cameraArr); */

var xhr = new XMLHttpRequest();
xhr.open("POST", camerasUrl, true);

/* xhr.onload = function () {
  // console.log(this.status);
  if (this.status == 200) {
    var order = JSON.parse(this.responseText);
    console.log(order);
  }
}; */

xhr.setRequestHeader("Content-type", "application/json");
xhr.send(contactObjStr, cameraArrStr);

console.log(xhr.readyState)

//FIXME look at camera.js


