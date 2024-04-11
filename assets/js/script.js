



const xenoCantoApi = 'https://xeno-canto.org/api/2/recordings?query=bearded+bellbird+q:A';


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
      // Function to add bird to search history
  function addToSearchHistory(bird) {
    const searchHistoryContainer = document.getElementById('searchHistory');
    const searchHistoryItem = document.createElement('div');
    searchHistoryItem.classList.add('search-history-item');
    searchHistoryItem.textContent = bird;
  
    searchHistoryItem.addEventListener('click', () => {
      fetchbirdData(bird);
    });
  }