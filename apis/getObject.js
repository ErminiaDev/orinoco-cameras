
var xhr = new XMLHttpRequest();
  xhr.open("GET", "index.html", true);

  xhr.onload = function (){
    // console.log(this.status);
    if (this.status == 200) {
      var indexContent = this.responseText;
      console.log(indexContent);
    }
  };

  
  xhr.send();