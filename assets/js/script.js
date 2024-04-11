

const searchBar = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');




const xenoCantoApi = 'https://xeno-canto.org/api/2/recordings?query=bearded+bellbird+q:A';

function submitBird() {
  let userSearchArray = JSON.parse(localStorage.getItem('theBird')) || [];

  const searchRequest = {
  searchBar: searchBar.value
  }

  userSearchArray.push(searchRequest);
  localStorage.setItem('theBird', JSON.stringify(userSearchArray));

}


searchBtn.addEventListener('click', function(e) {
  e.preventDefault();
  submitBird();
});



fetch(xenoCantoApi)

.then(function(response) {
  console.log(response);
  return response.json();
})

  .then(function(data) {
    console.log(data);
    
});








      fetch('https://nuthatch.lastelm.software/v2/birds?page=1&pageSize=25&name=bluebird&operator=AND', { //Get some wrens
        headers: {
          'api-key': 'c4cf748f-f7f9-44a1-8560-b929969c5dab'
        }
      })
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      });