//IMPORTANT comment the code to explain what it does

// console.log(localStorage);
const selectedCardId = localStorage.getItem('clickedBtnId');

camerasUrl = `http://localhost:3000/api/cameras/${selectedCardId}`;

let cameras;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", camerasUrl, true);

  xhr.onload = function (){
    // console.log(this.status);
    //FIXME promises instead of callbacks
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
          // console.log(allLenses);

          let lenseSelectList = document.getElementById("select_lense");

          for(i=0; i < allLenses.length; i++){ //FIXME ajouter plusieurs produits
            let lenseOption = document.createElement("option");
            lenseSelectList.appendChild(lenseOption);
            lenseOption.innerHTML += allLenses[i];
            lenseOption.setAttribute('value',`${[i]}`);
            // console.log(lense_selectList);
          }

          lenseSelectList.addEventListener('click', function(){
            let selectedLense = lenseSelectList.options[lenseSelectList.selectedIndex];
            /* console.log(selectedLense);
            console.log(selectedLense.value );
            console.log(selectedLense.text ); */
            localStorage.setItem('selectedLense', selectedLense.value);
          })
    

           cartBtn.addEventListener('click', function(){
            localStorage.setItem('cameraId', cameraId);
           });


          
      }
  };

  xhr.send();