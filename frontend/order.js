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

/* const contactString = JSON.stringify(contactObj);
const cameraString = JSON.stringify(cameraArr); */

//var xhr = new XMLHttpRequest();
//xhr.open("POST", camerasUrl, true);

/* xhr.onload = function () {
  // console.log(this.status);
  if (this.status == 200) {
    var order = JSON.parse(this.responseText);
    console.log(order);
  }
}; */

//xhr.setRequestHeader("Content-type", "application/json");
//xhr.send(contactObjStr, cameraArrStr);

var xhr = new XMLHttpRequest();
xhr.open("POST", camerasUrl, true);
// set `Content-Type` header
xhr.setRequestHeader('Content-Type', 'application/json');
// send request with JSON payload (test data)
 let json = {
   contact: {
    firstName: "John",
    lastName: "Doe",
    address: "random address",
    city: "Vancouver",
    email: "test@example.com"
   },
   products: [1, 2]
 };

xhr.setRequestHeader("Content-type", "application/json");
//xhr.send(JSON.stringify(finalObj));
xhr.send(JSON.stringify(json));

console.log(xhr.readyState)

//FIXME look at camera.js


