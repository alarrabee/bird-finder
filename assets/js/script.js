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