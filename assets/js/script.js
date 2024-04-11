// nuthatch api key: 6cf4b918-2b6c-4957-9565-908b413ff6e1

//const nuthatchApi = 'https://nuthatch.lastelm.software/v2/birds?page=1&pageSize=25&name=bluebird&operator=AND';

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
          'api-key': '6cf4b918-2b6c-4957-9565-908b413ff6e1'
        }
      })
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      });