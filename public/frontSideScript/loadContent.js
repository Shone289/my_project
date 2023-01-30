let url = '../jsonData/continentsAndDest.json';
const data = {};

function getData(url){
  let req = new XMLHttpRequest();
  req.open('GET', url);
  req.onload = function(){
    if(this.status == 200){
      console.log("STATUS IS 200");
      //console.log(JSON.parse(this.response));
      sendData(JSON.parse(this.response).europe);
      
    }
  };
  req.send();
}

function sendData(data){
  console.log(data);
  const ncontent = document.getElementsByClassName('main-content')[0];

  ncontent.getElementsByTagName('h1')[0].innerHTML = data.header;
  
  for(let i = 0; i < data.about.length; i++){
    const np = document.createElement('p');
    np.innerHTML = data.about[i];
    ncontent.appendChild(np);
  }

}

getData(url);
/*
<div class="container-row">
  
  <div class="main-content">
    <h1>EUROPE</h1>
    
  </div>
  <div class="aside">
    <h1>ASIDE</h1>
    <ul class="destinations"></ul>
  </div>
</div>
*/
