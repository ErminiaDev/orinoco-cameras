document.getElementById('btn3').addEventListener('click', loadCameras);

// Load Github Users
function loadCameras(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/api/cameras', true);

  xhr.onload = function(){
    if(this.status == 200){
      var cameras = JSON.parse(this.responseText);

      var output = '';
      for(var i in cameras){
        output +=
          '<div class="camera">' +
          '<img src="'+cameras[i].imageUrl+'" width="70" height="70">' +
          '<ul>' +
          '<li>Name: '+cameras[i].name+'</li>' +
          '<li>Price: '+cameras[i].price+'€</li>' +
          '</ul>' +
          '</div>';
      }

      document.getElementById('cameras').innerHTML = output;
    }
  }

  xhr.send();
}