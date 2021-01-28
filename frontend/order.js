/* ****************GETTING AND PARSING LOCALSTORAGE INFO***************** */

let contactObj = JSON.parse(localStorage.getItem('contactObject'));
let camArray = JSON.parse(localStorage.getItem('camArray'));
//let total = localStorage.getItem('total');


/* ***************CREATING FINAL OBJECT TO POST TO BACKEND**************** */
let finalObj = {};
finalObj.contact = contactObj;

let camIdArray = function createCamIdArr(){
  let array = [];
  for(i=0; i<camArray.length; i++){
    array.push(camArray[i].cam_id);
  }
  return array;
}();

finalObj.products = camIdArray;
console.log(finalObj);


/* *****************POSTING FINAL OBJECT****************** */
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

localStorage.clear();



