//IMPORTANT comment the code to explain what it does

// console.log(localStorage);
const selectedCardId = localStorage.getItem('clickedBtnId');

//FIXME clickedBtnId is still stored when in cart.js, is there need to localStorage a cameraID again?

//TODO TEST that localstorage is clear
/* localStorage.clear(); */


//TODO TEST that an ID is recieved on this page
camerasUrl = `http://localhost:3000/api/cameras/${selectedCardId}`;


let cameras;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", camerasUrl, true);

  xhr.onload = function (){
    // console.log(this.status);
    //FIXME promises instead of callbacks
    //TODO TEST the status
    if (this.status == 200) {
      var cameras = JSON.parse(this.responseText);


          cam_title.innerHTML = cameras.name;

          // let cam_photo = document.getElementById("cam_photo")
          cam_photo.style.backgroundImage = "url(" +cameras.imageUrl + ")";
          
          cam_description.innerHTML = cameras.description;

          cam_price.innerHTML = cameras.price + "€";//FIXME add commas to convert the number from cents to €

          let cartBtn = document.querySelector(".btn");
          let cameraId = cartBtn.id;
          cameraId = cameras._id;
          console.log(cameraId);

          let allLenses = cameras.lenses;
          //TODO test that lenses array is not null and length superior to 1

          let lenseSelectList = document.getElementById("select_lense");

          for(i=0; i < allLenses.length; i++){ 
            let lenseOption = document.createElement("option");
            lenseSelectList.appendChild(lenseOption);
            lenseOption.innerHTML += allLenses[i];
            lenseOption.setAttribute('value',`${[i]}`);
            // console.log(lense_selectList);
          }

          //TODO test that the following function stores a lense value
          lenseSelectList.addEventListener('click', function(){
            let selectedLense = lenseSelectList.options[lenseSelectList.selectedIndex];
            localStorage.setItem('selectedLense', selectedLense.value);
            console.log(localStorage);
            if(selectedLense.value == ""){
              cartBtn.disabled = true;
              alert('Merci de choisir une lentille');
            } else {
              cartBtn.disabled = false;
            }
          })        
          
          

           cartBtn.addEventListener('click', function(){           
              localStorage.setItem('cameraId', cameraId); 
           });


          
      }
  };

  xhr.send();