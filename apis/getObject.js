console.log(localStorage);
const selectedCardId = localStorage.getItem('clickedBtnId');

camerasUrl = `http://localhost:3000/api/cameras/${selectedCardId}`;

let cameras;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", camerasUrl, true);

  xhr.onload = function (){
    // console.log(this.status);
    //FIXME ne pas oublier les promises au lieu des callbacks
    if (this.status == 200) {
      var cameras = JSON.parse(this.responseText);


          cam_title.innerHTML = cameras.name;

          // let cam_photo = document.getElementById("cam_photo")
          cam_photo.style.backgroundImage = "url(" +cameras.imageUrl + ")";
          
          cam_description.innerHTML = cameras.description;
     

          let allLenses = cameras.lenses;
          console.log(allLenses);

          // console.log(allBtns);

          let select_lense = document.getElementById("select_lense");

          allLenses.forEach(function(){
            let newOption = document.createElement("option");
            newOption.innerHTML = allLenses[i];
            console.log(newOption.innerHTML);
            newOption.appendChild(select_lense);
          }); 
      }
  };

  xhr.send();