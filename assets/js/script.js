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