document.getElementById('btn2').addEventListener('click', loadFurnitures);

// Load Github Users
function loadFurnitures(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/api/furniture', true);

  xhr.onload = function(){
    if(this.status == 200){
      var furnitures = JSON.parse(this.responseText);

      var output = '';
      for(var i in furnitures){
        output +=
          '<div class="furniture">' +
          '<img src="'+furnitures[i].imageUrl+'" width="70" height="70">' +
          '<ul>' +
          '<li>Name: '+furnitures[i].name+'</li>' +
          '<li>Price: '+furnitures[i].price+'€</li>' +
          '</ul>' +
          '</div>';
      }

      document.getElementById('furnitures').innerHTML = output;
    }
  }

  xhr.send();
}