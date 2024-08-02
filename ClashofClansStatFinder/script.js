// bring in the search button and give functionality
document.getElementById('search-btn').addEventListener('click', () => {
    const playerStats = document.getElementById('tag').value;
    if (playerStats){
        getStats(playerStats)
    }
});

// bring in the api url and token 
function getStats(playerStats){
    const token = "";
    const apiURL = `https://api.clashofclans.com/v1/players/%23${playerStats}`;
    // %23 is url encoding for #

    // fetch and catch errors
    fetch(apiURL , {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response =>{
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayStats(data);
    })
    .catch(error => {
        console.error('Error fetching player stat data:', error);
        alert('Stats not found');
    })
};

// function to display stats in console for now
function displayStats(data){
    console.log(data);
}



// bring in the ids
// change text content