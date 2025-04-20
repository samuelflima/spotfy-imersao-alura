const searchInput = document.getElementById('search-input');
const resultsArtists = document.getElementById('results-artists');
const resultPlaylists = document.getElementById('results-playlists');


function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then(response => response.json())
        .then(result => displayResults(result))
        .catch(error => console.error('Error fetching artists:', error));
}

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if(searchTerm === '') {
        resultPlaylists.classList.add('hidden');
        resultsArtists.classList.remove('hidden');    
    }
    requestApi(searchTerm);
});