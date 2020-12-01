document.getElementById('btn1').addEventListener('click', loadTeddies);

// Load Github Users
function loadTeddies(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/api/teddies', true);

  xhr.onload = function(){
    if(this.status == 200){
      var teddies = JSON.parse(this.responseText);

      var output = '';
      for(var i in teddies){
        output +=
          '<div class="teddy">' +
          '<img src="'+teddies[i].imageUrl+'" width="70" height="70">' +
          '<ul>' +
          '<li>Name: '+teddies[i].name+'</li>' +
          '<li>Price: '+teddies[i].price+'€</li>' +
          '</ul>' +
          '</div>';
      }

      document.getElementById('teddies').innerHTML = output;
    }
  }

  xhr.send();
}