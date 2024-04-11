

const searchBarEl = document.getElementById('searchBar');
const searchBtnEl = document.getElementById('searchBtn');
const birdFacts = document.getElementById('birdFacts');

//APIs
const xenoCantoApi = 'https://xeno-canto.org/api/2/recordings?query=robin+q:A';
const nuthatchApi = `https://nuthatch.lastelm.software/v2/birds?page=1&pageSize=25&sciName=Sialia sialis&operator=AND`;


//nuthatch fetch request
  fetch(nuthatchApi, { //Get some wrens
    headers: {
      'api-key': 'c4cf748f-f7f9-44a1-8560-b929969c5dab'
    }
  })
  .then(function(response) {
    //console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);


    const nameEl = document.getElementById('name');
    const familyEl = document.getElementById('family');
    const orderEl = document.getElementById('order');
    const regionEl = document.getElementById('region');
    const statusEl = document.getElementById('status');

    nameEl.textContent = `Common Name: ${data.entities[0].name}`;
    familyEl.textContent = `Family: ${data.entities[0].family}`;
    orderEl.textContent = `Order: ${data.entities[0].order}`;
    regionEl.textContent = `Region: ${data.entities[0].region}`;
    statusEl.textContent = `Status: ${data.entities[0].status}`;

    birdFacts.append(nameEl);
    birdFacts.append(familyEl);
    birdFacts.append(orderEl);
    birdFacts.append(regionEl);
    birdFacts.append(statusEl);


  });


