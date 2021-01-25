let contactObjStr = localStorage.getItem('contactObject');
console.log(contactObjStr);
let camArrStr = localStorage.getItem('camArray');
console.log(camArrStr);
let contactObj = JSON.parse(contactObjStr);
let camArray = JSON.parse(camArrStr);
let total = localStorage.getItem('total');

let finalObj = {};
finalObj.contact = contactObj;
finalObj.products = camArray;
console.log(finalObj);

camerasUrl = `http://localhost:3000/api/cameras/order`;

var xhr = new XMLHttpRequest();

xhr.open("POST", camerasUrl, true);

xhr.onload = function () {
  
  if (this.status == 201) {
    var order = JSON.parse(this.responseText);
    console.log(order);
    console.log(this.status);
    let successMsg = document.querySelector(".success-message");
    successMsg.textContent = "Merci pour votre achat  " + order.contact.firstName + " " + order.contact.lastName + ". Votre numéro de commande est le suivant: " + order.orderId + "."
  } else {
    console.log(this.status);
  }
};

xhr.setRequestHeader("Content-type", "application/json");
xhr.send(JSON.stringify(finalObj));



