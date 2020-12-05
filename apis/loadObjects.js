
camerasUrl = "http://localhost:3000/api/cameras";

let cameras;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", camerasUrl, true);

  xhr.onload = function (){
    // console.log(this.status);
    if (this.status == 200) {
      var cameras = JSON.parse(this.responseText);
      for (var i in cameras) {

        

        let rowDiv = document.getElementById("row");

        let colDiv = document.createElement("div");
        colDiv.classList.add("col-4", "del");
        colDiv.id = "card" + (Number([i])+1);
        rowDiv.appendChild(colDiv);

        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "bg-light", "mb-3", "del");
        cardDiv.id = cameras[i]._id;
        colDiv.appendChild(cardDiv);

        let cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header", "del");
        cardHeader.innerHTML = cameras[i].name;
        cardDiv.appendChild(cardHeader);

        let cardImage = document.createElement("div");
        cardImage.style.width = "350px";
        cardImage.style.height = "250px";
        cardImage.style.backgroundRepeat = "no-repeat";
        cardImage.style.backgroundPosition = "center";
        cardImage.style.backgroundSize = "cover";
        cardImage.style.backgroundImage = "url(" +cameras[i].imageUrl + ")";
        cardDiv.appendChild(cardImage);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "text-center", "del");
        cardDiv.appendChild(cardBody);

        let cardPrice = document.createElement("div");
        cardPrice.classList.add("card-text", "lead", "del");
        cardPrice.innerHTML = cameras[i].price + ' €';
        cardBody.appendChild(cardPrice);

        let cardBtn = document.createElement("a");
        cardBtn.classList.add("btn", "btn-dark", "my-3");
        cardBtn.id = "btn" + (Number([i])+1);
        cardBtn.href = 'product.html';
        cardBtn.innerHTML = "Voir les détails";
        cardBody.appendChild(cardBtn); 

        /* const cardLinkURL = function(){
          const mainURL = 'product.html';
          const queryParams = new URLSearchParams ();
          for(const [key, value] of queryParams) {
            console.log(`${key} => ${value}`)
            // if(cardDiv.hasOwnProperty(key)) {
            //   queryParams.set(key, cardDiv[key])
            // }
          }
          // console.log(queryParams);
          console.log(`${mainURL}?` + queryParams.toString());
        };
        cardLinkURL();
        
        // console.log(cardDiv);
        Object.values(cardDiv); */
        
      }

      let camera1 = document.getElementById("card1");
      let camera2 = document.getElementById("card2");
      let camera3 = document.getElementById("card3");
      let camera4 = document.getElementById("card4");
      let camera5 = document.getElementById("card5");
      
      cardArr = [camera1, 
      camera2,
      camera3,
      camera4,
      camera5 ];

      let cameraBtn1 = document.getElementById("btn1");
      let cameraBtn2 = document.getElementById("btn2");
      let cameraBtn3 = document.getElementById("btn3");
      let cameraBtn4 = document.getElementById("btn4");
      let cameraBtn5 = document.getElementById("btn5");

      btnArr = [cameraBtn1, 
      cameraBtn2,
      cameraBtn3,
      cameraBtn4,
      cameraBtn5 ];

      
      btnArr[0].addEventListener('click', function(){
        clickedCard = cardArr[0].innerHTML;
        localStorage.setItem('clickedCard', clickedCard);
      });
      btnArr[1].addEventListener('click', function(){
        clickedCard = cardArr[1].innerHTML;
        localStorage.setItem('clickedCard', clickedCard);
      });
      btnArr[2].addEventListener('click', function(){
        clickedCard = cardArr[2].innerHTML;
        localStorage.setItem('clickedCard', clickedCard);
      });
      btnArr[3].addEventListener('click', function(){
        clickedCard = cardArr[3].innerHTML;
        localStorage.setItem('clickedCard', clickedCard);
      });
      btnArr[4].addEventListener('click', function(){
        clickedCard = cardArr[4].innerHTML;
        localStorage.setItem('clickedCard', clickedCard);
      });
      

      /* for(i=0; i<5; i++){
        (function(){
          btnArr[i].addEventListener('click', function(){
            clickedCard = cardArr[i].innerHTML;
            localStorage.setItem('clickedCard', clickedCard);
          })
        }());
      };
 */

    }
  };

  // console.log(cameras);
  xhr.send();



