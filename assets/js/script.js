const searchBarEl = document.getElementById('searchBar');
const searchBtnEl = document.getElementById('searchBtn');
const birdFacts = document.getElementById('birdFacts');




//saves search value to localStorage
function getBird() {
  const searchValue = searchBarEl.value.trim();

  let birdArray = JSON.parse(localStorage.getItem('bird')) || [];
  birdArray.push(searchValue)
  localStorage.setItem('bird', JSON.stringify(birdArray));

  getFacts(searchValue);
  getAudio(searchValue);
}

//Will fetch requested bird object from the nuthatch API using search bar text value pulled from localStorage 
function getFacts(bird) {
  const nuthatchApi =  `https://nuthatch.lastelm.software/v2/birds?page=1&pageSize=1&name=${bird}&operator=AND`;

  //nuthatch fetch request
  fetch(nuthatchApi, { 
    headers: {
      'api-key': 'c4cf748f-f7f9-44a1-8560-b929969c5dab'
    }
  })
  .then(function(response) {
    // console.log(response);
    return response.json();
  })
  .then(function(birdData) {
    displayFacts(birdData);
    console.log(birdData); 
  }) 
};

//Displays the specified bird facts retrieved from the bird object from getFacts(bird)
function displayFacts(birdData) {
  const name = birdData.entities[0].name;


  const nameEl = document.getElementById('name');
  const sciNameEl = document.getElementById('sciName');
  const familyEl = document.getElementById('family');
  const orderEl = document.getElementById('order');
  const regionEl = document.getElementById('region');
  const statusEl = document.getElementById('status');
  const sizeEl = document.getElementById('size');
  const wingSpanEl = document.getElementById('wingSpan');


  nameEl.textContent = `Common Name: ${birdData.entities[0].name}`;
  sciNameEl.textContent = `Scientific Name: ${birdData.entities[0].sciName}`;
  familyEl.textContent = `Family: ${birdData.entities[0].family}`;
  orderEl.textContent = `Order: ${birdData.entities[0].order}`;
  regionEl.textContent = `Region: ${birdData.entities[0].region}`;
  statusEl.textContent = `Conservation Status: ${birdData.entities[0].status}`;
  sizeEl.textContent = `Size: Measures ${birdData.entities[0].lengthMin}-${birdData.entities[0].lengthMax} cm long`;
  wingSpanEl.textContent = `Wingspan: Measures ${birdData.entities[0].wingspanMin}-${birdData.entities[0].wingspanMax} cm across`;


  birdFacts.append(nameEl);
  birdFacts.append(sciNameEl);
  birdFacts.append(familyEl);
  birdFacts.append(orderEl);
  birdFacts.append(regionEl);
  birdFacts.append(statusEl);
  birdFacts.append(sizeEl);
  birdFacts.append(wingSpanEl);

    //displays image
    const birdImgOne = document.getElementById('birdImg-one');
    birdImgOne.src = birdData.entities[0].images[0];
  
    const birdImgTwo = document.getElementById('birdImg-two');
    birdImgTwo.src = birdData.entities[0].images[1];
  
    // const birdImgThree = document.getElementById('birdImg-three');
    // birdImgThree.src = birdData.entities[0].images[2];
  
}