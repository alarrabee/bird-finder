

const searchBarEl = document.getElementById('searchBar');
const searchBtnEl = document.getElementById('searchBtn');
const birdFacts = document.getElementById('birdFacts');





const xenoCantoApi = 'https://xeno-canto.org/api/2/recordings?query=robin+q:A';

// function submitRequest() {
//   let userSearchArray = JSON.parse(localStorage.getItem('theBird')) || [];

//   const searchRequest = {
//   searchRequest: searchBarEl.value
//   }

//   userSearchArray.push(searchRequest);
//   localStorage.setItem('theBird', JSON.stringify(userSearchArray));

// }



// fetch(xenoCantoApi)

// .then(function(response) {
//   console.log(response);
//   return response.json();
// })

//   .then(function(data) {
//     console.log(data);

// });


// function getBird(searchTextValue) {
  const nuthatchApi = `https://nuthatch.lastelm.software/v2/birds?page=1&pageSize=25&sciName=Sialia sialis&operator=AND`;

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

    // const nameEl = document.createElement('li');
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


searchBtnEl.addEventListener('click', function(e) {
  e.preventDefault();
  submitRequest();
  const searchTextValue = searchBarEl.value.trim();
  if (searchTextValue) {
    getBird(searchTextValue)
  }

});






// function postBird () {
//   let userSearchArray = JSON.parse(localStorage.getItem('theBird')) || [];

//   const name = document.getElementById('name');
//   // name.innerHTML = userSearchArray.
// }