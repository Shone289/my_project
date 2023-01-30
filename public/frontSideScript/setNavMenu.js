{
let url = '../jsonData/continentsAndDest.json';

//get data from "jsonData/continentsAndDest" file
function getData(url){
  let req = new XMLHttpRequest();
  req.open('GET', url);
  req.onload = function(){
    if(this.status == 200){
      console.log("STATUS IS 200");
      //console.log(JSON.parse(this.response));
      setDataToNav(JSON.parse(this.response).list);
    }
  };
  req.send();
}

//function for set data in navigation list
function setDataToNav(data){
  const nul = document.getElementsByClassName('continents-list')[0];

  //first go through continents and make nav list
  for(let i = 0; i < data.length; i++){
    const nli = document.createElement('li');
    const na = document.createElement('a');
    const ndiv = document.createElement('div');

    for(let prop in data[i]){
      //make path to file for continent
      na.href = '/' + prop;
      //and insert val
      na.innerHTML = prop.toLowerCase();
    }

    //create <div class="dropdown-content">...</div>
    //go through destinations for every continent
    for(let j = 0; j < data[i].destinations.length; i++){
      const nain = document.createElement('a');
      nain.href = data[i].destinations[j].path;
      nain.href = data[i].destinations[j].name;
      ndiv.appendChild(nain);
    }

    nli.appendChild(na);
    nli.appendChild(ndiv);
    nul.appendChild(nli);
  }

  /* --create dinamic list with javascript 
        should look like this

    <li class="dropdown">
      <a href="#">EUROPE</a>
        <div class="dropdown-content">
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
        </div>
      </li>
      <li class="dropdown">
      <a href="#">ASIA</a>
      <div class="dropdown-content">
        <a href="#">London, England</a>
        <a href="#">Paris, France</a>
      </div>
      </li>
      <li class="dropdown">
      <a href="#">SOUTH AMERICA</a>
      <div class="dropdown-content">
        <a href="#">London, England</a>
        <a href="#">Paris, France</a>
      </div>  
    </li>
  */
  //gou through
}

}