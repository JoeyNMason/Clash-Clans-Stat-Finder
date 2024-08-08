// bring in the search button and give functionality
document.getElementById('search-btn').addEventListener('click', () => {
    const playerStats = document.getElementById('tag').value;
    if (playerStats){
        getStats(playerStats)
    }
});

// bring in the api url and token 
function getStats(playerStats){
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjcyMzc5YWViLTkxZTUtNGY3My1iMmQ3LTdiM2YyMDM0ZTAwNiIsImlhdCI6MTcyMzExMzkxMiwic3ViIjoiZGV2ZWxvcGVyL2Q5YTkzZmYyLWU4MWItMTg1My1mYjk4LWU1OGRmYTUzZTJiMyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQ1Ljc5LjIxOC43OSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.X-uuA5zcXKIC5wZzlWGpTLxT5pzvXhoFNTENTWELR08g-0lHn_7bRdXCzjdjEwxP4RVOlfR59x5nXKylmPp_8g";
    const apiURL = `https://cocproxy.royaleapi.dev/v1/players/%23${playerStats}`;
    // https://api.clashofclans.com/v1/players/%23${playerStats}
    // https://cocproxy.royaleapi.dev
    // https://cocproxy.royaleapi.dev/v1/players/%23${playerStats}
    // %23 is url encoding for #

    console.log(`Requesting data from: ${apiURL}`);

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